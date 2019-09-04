(function () {
    //for links
    let navList = document.querySelector('.header__nav-list');
    let navLink = navList.querySelectorAll('.header__nav-link');
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function() {
            let current = navList.getElementsByClassName('header__nav-link_active');
            current[0].classList.remove('header__nav-link_active');
            this.classList.add('header__nav-link_active');
        });
    }
 
    // let container = document.querySelector('[data-current-lnag]');
    // let ua = document.querySelector('[data-ua-lnag]');
    // let ru = document.querySelector('[data-ru-lnag]');
    // let us = document.querySelector('[data-us-lnag]');

    // ua.addEventListener('click', () => {
    //     ru.classList.remove('flag-icon-ru');
    //     ru.classList.add('flag-icon-ua');
    // })
})();

