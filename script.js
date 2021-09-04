window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollSec= document.getElementsByClassName('scrolly-nav')[0];
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    scrollSec.classList.toggle('scrolly-active' , windowPosition);
});
