export default class FeedbackSlider {
  constructor(slidesSelector, dotsSelector, prevButtonSelector, nextButtonSelector, activeClass) {
    this.slides = document.querySelectorAll(slidesSelector);
    this.dots = document.querySelectorAll(dotsSelector);
    this.currentSlideIndex = 1;
    this.prevButton = document.querySelector(prevButtonSelector);
    this.nextButton = document.querySelector(nextButtonSelector);
    this.activeClass = activeClass;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.currentSlideIndex = 1;
    }

    if (n < 1) {
      this.currentSlideIndex = this.slides.length;
    }

    this.slides.forEach((slide) => {
      slide.style.display = 'none';
    });
    this.dots.forEach((dot) => {
      dot.classList.remove(this.activeClass);
    });

    this.slides[this.currentSlideIndex - 1].style.display = 'flex';
    if (this.dots[this.currentSlideIndex - 1]) {
      this.dots[this.currentSlideIndex - 1].classList.add(this.activeClass);
    }
  }

  plusSlides(n) {
    this.showSlides((this.currentSlideIndex += n));
  }

  initSlider() {
    this.prevButton.addEventListener(`click`, () => this.plusSlides(-1));
    this.nextButton.addEventListener(`click`, () => this.plusSlides(1));
    this.showSlides(this.currentSlideIndex);
  }
}
