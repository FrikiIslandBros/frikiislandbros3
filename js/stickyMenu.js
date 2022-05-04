let navbar = document.querySelector('.container__menu');
let sticky = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('menu_fixed');
    } else {
        navbar.classList.remove('menu_fixed');
    }
} 