const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('lock');
});

menuList.addEventListener('click', function() {
    menuBurger.classList.remove('active');
	menu.classList.remove('active');
    body.classList.remove('lock');
});