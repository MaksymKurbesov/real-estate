export default class Animation {
  initMain() {
    const navElements = document.querySelectorAll('.nav-list li');
    const mainInfoElement = document.querySelector('.main-info');
    const rightImageElement = document.querySelector('.main-images__right');
    const leftImageElement = document.querySelector('.main-images__left');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navElements.forEach((navElem) => navElem.classList.add('animation--fadeToCenter'));
            mainInfoElement.classList.add('animation--fadeIn');
            rightImageElement.classList.add('animation--toCenter');
            leftImageElement.classList.add('animation--toCenter');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(document.querySelector('.s-main'));
  }

  initFeatures() {
    const descriptionElement = document.querySelector('.features-description');
    const listElement = document.querySelector('.features-list');
    const titleElement = document.querySelector('.features-title');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            descriptionElement.classList.add('animation--fadeToCenter');
            listElement.classList.add('animation--fadeToCenter');
            titleElement.classList.add('animation--fadeToCenter');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(document.querySelector('.s-features'));
  }

  initWhyToChoose() {
    const titleElement = document.querySelector('.choose-us-title');
    const headingElement = document.querySelector('.choose-us-heading');
    const subtitleElement = document.querySelector('.choose-us-subtitle');
    const buttonsElement = document.querySelector('.choose-us-buttons');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleElement.classList.add('animation--fadeToCenter');
            headingElement.classList.add('animation--fadeIn');
            subtitleElement.classList.add('animation--fadeIn');
            buttonsElement.classList.add('animation--fadeIn');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.s-choose-us'));
  }

  initProperties() {
    const propertiesElements = document.querySelectorAll('.properties-list li');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            propertiesElements.forEach((element) => {
              element.classList.add('animation--fadeToCenter');
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.s-properties'));
  }

  initFeedbackSlider() {
    const sliderSectionElement = document.querySelector('.s-feedback-slider');
    const sliderElement = document.querySelector('.slider');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sliderSectionElement.classList.add('animation--before');
            sliderElement.classList.add('animation--fadeToCenter');
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(sliderSectionElement);
  }

  initBooking() {
    const bookingElement = document.querySelector('.s-booking');
    const bookingTextElement = document.querySelector('.booking-text');
    const bookingButtonElement = document.querySelector('.booking-button');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bookingElement.classList.add('animation--toCenterBezier');
            bookingTextElement.classList.add('animation--fadeInDelay');
            bookingButtonElement.classList.add('animation--fadeInDelay');
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(bookingElement);
  }

  initAnimations() {
    this.initMain();
    this.initFeatures();
    this.initWhyToChoose();
    this.initProperties();
    this.initFeedbackSlider();
    this.initBooking();
  }
}
