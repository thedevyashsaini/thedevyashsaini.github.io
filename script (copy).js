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

