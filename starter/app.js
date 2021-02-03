"use strict";
// When click on nav selection close background
const navLink = document.querySelector(".navigation__link");

// BUILDING THE SLIDER - Testimonils/products
// SELECTING ELEMENTS
const slides = document.querySelectorAll(".slide");
const maxSlides = slides.length;
const minSlides = slides[0];
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
let currentSlide = 0;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// // this puts the slides next to each other
// slides.forEach((s, i) => {
//   s.style.transform = `translateX(${100 * i}%)`;
//   // 0, 100, 200, 300
// });

// FUNCTIONS

const slider = () => {
  const goToSlide = (slide) => {
    // this puts the slides next to each other
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      // 0, 100, 200, 300
    });
  };
  const nextSlide = () => {
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const previousSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const createDots = () => {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document.querySelectorAll(".dots__dot").forEach((d) => {
      d.classList.remove("dots__dot--active");
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // EVENT HANDLERS
  // ADD KEYBOARD EVENTS
  // we handle keyboard events at the document
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", previousSlide);
  document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "ArrowRight") {
      nextSlide();
    } else {
      previousSlide();
    }
  });
  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const [slide] = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
