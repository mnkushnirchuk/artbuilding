const headerMenu = () => {
    const headerMenuBurger = document.querySelector('.header__menu-burger');
    const headerMenuList = document.querySelector('.header__menu-list');
    
    headerMenuBurger.addEventListener('click', function () {
        this.classList.toggle('active');
        headerMenuList.classList.toggle('is-active');
    });
    document.querySelector('.header__menu-burger').addEventListener('click', function() {
        const body = document.body;
        const menuIsActive = body.classList.toggle('menu-active');
    
        if (menuIsActive) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
    
};
export default headerMenu;
