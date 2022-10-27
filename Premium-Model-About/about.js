var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn-slide");
let currentSlide = 1;
let active = document.getElementsByClassName("active");

// Javascript for image slider manuel navigation
var manualNav = (manual) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Logic for image slider autoplay navigation

var repeat = () => {
  let active = document.getElementsByClassName("active");
  let i = 1;

  function repeater() {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }

      if (i >= slides.lenght) {
        return;
      }
      repeater();
    }, 10000);
  }
  repeater();
};

repeat();

// Counter

jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
