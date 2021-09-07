window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    scrollSec.classList.toggle('scrolly-active', windowPosition);
});



//tablet slider

const arrowRight =document.querySelector('.arrow-r')
const arrowLeft =document.querySelector('.arrow-l')
const mainCard =document.querySelector('.main-card')
arrowRight.addEventListener("click", ()=>{
mainCard.classList.add("go-left")
arrowLeft.classList.add("active")
arrowRight.classList.add("hide")

})

arrowLeft.addEventListener("click" , () => {
    mainCard.classList.remove("go-left")
    arrowLeft.classList.remove("active")
    arrowRight.classList.remove("hide")
})