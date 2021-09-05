window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    scrollSec.classList.toggle('scrolly-active', windowPosition);
});



//=================== slider mobile =====================//
const slider = document.querySelector('.slider__container'),
    slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) =>
        e.preventDefault())

    //Touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)


    //mobile events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

//disable context menu
window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function touchStart(index) {
    return function (event) {
        currentIndex = index
        // startPos = (event).type.includes('mouse') ? event.pageX : event.touches[0].clientX
        // console.log(startPos)
        startPos = getPositionX(event)
        // console.log((event).type.include('mouse'))
        // console.log('start')
        isDragging = true

        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')

    }
}

function touchEnd() {
    // console.log('end')
    isDragging = false
    cancelAnimationFrame(animationID)
    const movedBy = currentTranslate = prevTranslate

    if (movedBy < -100 && currentIndex < slides.length - 1) {
        currentIndex += 1
    }
    if (movedBy > 100 && currentIndex > 0) {
        currentIndex -= 1
    }
    setPositiohByIndex()

    slider.classList.remove('grabbing')

}
function touchMove(event) {
    if (isDragging) {
        // console.log('move')
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition
            - startPos
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX :
        event.touches[0].clientX
}

function animation() {
    setsliderPosition()
    if (isDragging) requestAnimationFrame(animation)

}
function setsliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`

}
function setPositiohByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setsliderPosition()

}