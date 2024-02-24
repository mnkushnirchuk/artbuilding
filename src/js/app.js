/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();

/* Фиксированный header */
// BaseHelpers.headerFixed();

/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu().init();

/**  ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**  ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();

/* ТАБЫ ===================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
// import { useDynamicAdapt } from './modules/dynamicAdapt.js'
// useDynamicAdapt()

/* Маска для инпута tel ===================================================================================
	* Добавить класс tel к нужному инпуту 
*/
// import { maskTel } from './modules/index.js'
// maskTel()

/* Cкрыть меню при клике на его ссылки ===================================================================================
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
//toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ===================================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента ========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
// const swiper = new Swiper('.swiper', {
//   speed: 800,
//   spaceBetween: 16,
//   slidesPerView: 1.4,
//   modules: [Autoplay, Navigation, Pagination],
//   loop: true,
//   initialSlide: 1,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
//   navigation: {
//     prevEl: ".reviews__button-slider-prev",
//     nextEl: ".reviews__button-slider-next"
//   },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//   	},
//     1650: {
//         slidesPerView: 4,
//         spaceBetween: 48,
//     }
//   },
// });


/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================

/* Добавление класса _active родителю при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)





document.addEventListener("DOMContentLoaded", function() {
	document.querySelector('.preloader').style.display = 'flex';
	document.querySelector('.slider').style.display = 'none';
  
	setTimeout(function() {
	  document.querySelector('.preloader').style.display = 'none';
	  document.querySelector('.slider').style.display = 'flex';
  
	  const sliderInformation = document.querySelector('.slider__information');
	  const informationCounter = document.querySelector('.information__counter');
	  const blockTitle = document.querySelector('.block__title');
	  const blockText = document.querySelector('.block__text');
	  const informationMore = document.querySelector('.information__more');
	  sliderInformation.classList.add('slide-in-right');
	  sliderInformation.style.opacity = 1; 
	  sliderInformation.style.animationDuration = '1s';
  
	  setTimeout(function() {
		informationCounter.style.opacity = 1;
		informationCounter.classList.add('slide-in-right');
		informationCounter.style.animationDuration = '1s';
	  }, 1000); 
  
	  setTimeout(function() {
		blockTitle.style.opacity = 1;
		blockTitle.classList.add('slide-in-right');
		blockTitle.style.animationDuration = '1s';
	  }, 2000); 
  
	  setTimeout(function() {
		blockText.style.opacity = 1;
		blockText.classList.add('slide-in-right');
		blockText.style.animationDuration = '1s';
	  }, 3000); 

	  setTimeout(function() {
		informationMore.style.opacity = 1;
		informationMore.classList.add('slide-in-right');
		informationMore.style.animationDuration = '1s';
	  }, 4000); 


	}, 4000); 
  });
  