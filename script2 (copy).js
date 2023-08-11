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