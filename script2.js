var preogressbar=document.getElementById("preogressbar"),totalHeight=document.body.scrollHeight-window.innerHeight;window.onscroll=function(){var e=window.scrollY/totalHeight*100;preogressbar.style.width=100-Math.min(100,Math.max(0,e))+"%"};var loader=document.getElementById("preloader");function moveElem(e){let t=e.getBoundingClientRect().left,l=e.offsetWidth;var n=document.getElementsByClassName("bar")[0],s=e.href.split("#")[1];n.style.left=t-10+"px",n.style.width=l+25+"px","home"==s&&(n.style.background="#fff0",s="portfolio"),["about","skills","contact"].includes(s)&&(n.style.background="#fff"),["expertise","projects"].includes(s)&&(n.style.background="#111"),document.title="TheDevyash || "+capitalizeWords(s)}function handleDivInView(e,t){e.forEach(e=>{if(e.isIntersecting){var t="#"+e.target.id;let l=document.querySelector('a[href="'+t+'"]'),n=l.getBoundingClientRect().left,s=l.offsetWidth;var i=document.getElementsByClassName("bar")[0],a=l.href.split("#")[1];i.style.left=n-10+"px",i.style.width=s+25+"px","home"==a&&(i.style.background="#fff0",a="portfolio"),["about","skills","contact"].includes(a)&&(i.style.background="#fff"),["expertise","projects"].includes(a)&&(i.style.background="#111"),document.title="TheDevyash || "+capitalizeWords(a)}})}window.addEventListener("load",function(){$("#preloader").fadeOut(100),window.innerWidth>947?$(".menu-btn:last").click(function(){$(".navbar .menu").toggleClass("active"),$(".menu-btn i").toggleClass("active")}):$(".menu-btn").click(function(){$(".navbar .menu").toggleClass("active"),$(".menu-btn i").toggleClass("active"),$("body").toggleClass("scrollLock")}),window.location.hash&&"#home"!==window.location.hash&&($(".navbar").addClass("sticky"),document.querySelector('a[href="'+window.location.hash+'"]').click(),window.innerWidth<=947&&$(".menu-btn:last").click())});const observer=new IntersectionObserver(handleDivInView,{root:null,rootMargin:"0px",threshold:.3});var sections=document.querySelectorAll("section");function capitalizeWords(e){return e.replace(/\b\w/g,function(e){return e.toUpperCase()})}function windowDimension(){if(window.innerWidth<=510){document.getElementById("preloader").style.backgroundSize="30%";var e=window.innerWidth+"px";document.getElementById("home").style.width=e,document.getElementById("home").style.height=window.innerHeight+"px",document.getElementsByClassName("menu")[0].style.height="-webkit-fill-available",document.getElementById("about").style.width=e,document.getElementById("expertise").style.width=e,document.getElementById("skills").style.width=e,document.getElementById("projects").style.width=e,document.getElementById("contact").style.width=e,document.getElementById("media").style.gap="0",document.getElementsByTagName("footer")[0].style.width=e,document.getElementsByClassName("bar")[0].style.display="none"}else{document.getElementById("preloader").style.backgroundSize="15%";var e="100%";document.getElementById("home").style.width=e,document.getElementById("home").style.height="100vh",document.getElementsByClassName("menu")[0].style.height="-webkit-fill-available",document.getElementById("about").style.width=e,document.getElementById("expertise").style.width=e,document.getElementById("skills").style.width=e,document.getElementById("projects").style.width=e,document.getElementById("contact").style.width=e,document.getElementById("media").style.gap="50px",document.getElementsByTagName("footer")[0].style.width=e,document.getElementsByClassName("bar")[0].style.display="block"}}function onSubmit(e){if(grecaptcha.getResponse()){document.getElementById("captchaBtn").remove();let t=document.createElement("button");t.type="submit",t.id="submitBtn",t.textContent="Send Message";let l=document.querySelector(".button-area");l.insertBefore(t,l.firstChild),t.click()}}sections.forEach(function(e){observer.observe(e)}),window.ScrollY&&$(".navbar").addClass("sticky"),windowDimension(),window.addEventListener("resize",windowDimension),document.getElementById("contactForm").addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("formErr"),l=document.getElementById("submitBtn");if(!l){t.textContent="Nice try!",t.style.display="block";return}let n=document.getElementsByName("name")[0].value,s=document.getElementsByName("email")[0].value,i=document.getElementsByName("subject")[0].value,a=document.getElementsByName("message")[0].value;if(!n||!s||!i||!a){t.textContent="All fields are required.",t.style.display="block";return}let o=s.split("@")[1],r=await fetch(`https://api-archive.devyashsaini.repl.co/check-email-domain?domain=${o}`),d=await r.json();if(!d.valid){t.textContent="Invalid email domain.",t.style.display="block";return}t.style.display="none",e.target.submit()});
