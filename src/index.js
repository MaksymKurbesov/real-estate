import Animation from './assets/js/animation';
import FeedbackSlider from './assets/js/feedback-slider';
import './assets/scss/index.scss';

window.addEventListener('DOMContentLoaded', () => {
  new Animation().initAnimations();
  new FeedbackSlider(
    '.slider .slider__item',
    '.slider__dots span',
    '.slider-button-prev',
    '.slider-button-next',
    'slider__dots--active'
  ).initSlider();
  new FeedbackSlider(
    '.choose-us-image img',
    null,
    '.choose-us-prev-button',
    '.choose-us-next-button',
    ''
  ).initSlider();
});
