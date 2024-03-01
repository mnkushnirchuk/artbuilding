import Swiper, { Navigation } from 'swiper';

const aboutTeam = (slider) => {
  const swiper = new Swiper(slider, {
    speed: 800,
    slidesPerView: 'auto',
    modules: [Navigation],
    loop: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    on: {
      slideChange: function () {
        const currentIndex = this.realIndex + 1; 
        document.querySelector('.about__team-counter .current').textContent = currentIndex.toString().padStart(2, '0');
      }
    }
  });
}
export default aboutTeam;
