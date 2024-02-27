const homePage = () => {

  document.querySelector('.slider').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.slider').style.display = 'flex';
    const elementsToAnimate = document.querySelectorAll('.slider__information, .information__counter');

    elementsToAnimate.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 1000);
    });
  }, 2000);

  const informationList = document.querySelector('.information-list');
  document.querySelector('.information__burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      informationList.style.display = 'flex';
    } else {
      informationList.style.display = 'none';
    }
  });

  changeSlide(1);

  const paginationItems = document.querySelectorAll('.pagination__item__wrapper');
  const currentNum = document.querySelector('.current-num');
  const prevArrow = document.querySelector('.arrow-prev');
  const nextArrow = document.querySelector('.arrow-next');
  let currentSlideIndex = 1;
  let autoSlideTimer; // Объявляем переменную для таймера

  // Функция для смены слайда
  function changeSlide(slideNumber) {
    const elementsToAnimate = document.querySelectorAll('.block__title, .block__text, .information__more');

    elementsToAnimate.forEach((element, index) => {
      element.classList.remove('animate');
    });
    document.querySelectorAll('.information__block').forEach(block => {
      // block.style.display = 'none';
      block.classList.remove('active');
    });

    // document.querySelector('.information__block-' + slideNumber).style.display = 'block';
    const activeSlide = document.querySelector('.information__block-' + slideNumber);
    activeSlide.classList.add('active');
    const blockAnimateElements = activeSlide.querySelectorAll('.block__title, .block__text, .information__more');
    blockAnimateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 1000);
    });
    document.querySelectorAll('.pagination__item').forEach(item => {
      item.classList.remove('pagination__item--active');
    });
    // Необходимо убедиться, что эта строка корректно вписывается в ваш контекст, так как она отсутствовала в изначальном коде
    // informationList.style.display = 'none'; 
    document.querySelector('.information__burger-menu').classList.remove('active');

    document.querySelectorAll('.pagination__item__wrapper')[slideNumber - 1].children[0].classList.add('pagination__item--active');

    document.getElementById('page').style.backgroundImage = `url('images/background-slide-${slideNumber}.png')`;

    document.querySelectorAll('.nav__link').forEach((link, index) => {
      link.classList.remove('nav__link--active');
      if (index === slideNumber - 1) {
        link.classList.add('nav__link--active');
      }
    });

    // Перезапуск таймера авто-переключения после ручного переключения слайда
    resetAutoSlideTimer();
  }

  function changeNum(changeNum) {
    currentNum.innerHTML = `0${changeNum}`;
  }

  function resetAutoSlideTimer() {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(() => {
      if (currentSlideIndex < paginationItems.length) {
        changeSlide(currentSlideIndex + 1);
        changeNum(currentSlideIndex + 1);
        currentSlideIndex += 1;
      } else {
        changeSlide(1);
        changeNum(1);
        currentSlideIndex = 1;
      }
    }, 10000);
  }

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      changeSlide(index + 1);
      changeNum(index + 1);
      currentSlideIndex = index + 1;
    });
  });

  prevArrow.addEventListener('click', function () {
    if (currentSlideIndex > 1) {
      changeSlide(currentSlideIndex - 1);
      changeNum(currentSlideIndex - 1);
      currentSlideIndex -= 1;
    }
  });

  nextArrow.addEventListener('click', function () {
    if (currentSlideIndex < paginationItems.length) {
      changeSlide(currentSlideIndex + 1);
      changeNum(currentSlideIndex + 1);
      currentSlideIndex += 1;
    }
  });

  document.querySelectorAll('.nav__link').forEach((link, index) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      changeSlide(index + 1);
      changeNum(index + 1);
      currentSlideIndex = index + 1;
    });
  });

  const headerBurgerList = document.querySelector('.header-burger__menu');
  document.querySelector('.header__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      headerBurgerList.style.display = 'flex';
    } else {
      headerBurgerList.style.display = 'none';
    }
  });

  resetAutoSlideTimer();

}
export default homePage;