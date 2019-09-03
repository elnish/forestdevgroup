;(function () {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.header__nav-list');
    let logo = document.querySelector(".header__logo");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active'); 
    menu.classList.toggle('header__nav-list_show'); 
    logo.classList.toggle("down");
});
   
})();

