import Swiper, { Navigation } from 'swiper';

const aboutTeam = (slider) => {
  new Swiper(slider, {
    speed: 800,
    slidesPerView: 'auto',
    modules: [Navigation],
    loop: true,
    // centeredSlides: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
  });
}
export default aboutTeam;