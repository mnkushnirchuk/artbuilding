import Swiper, { Navigation } from 'swiper';

const caseSlider = (slider) => {
  new Swiper(slider, {
    speed: 800,
    slidesPerView: 'auto',
    modules: [Navigation],
    loop: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
  });
}
export default caseSlider;