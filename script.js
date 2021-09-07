// --------------for scrolling verticaly 
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
  scrollSec.classList.toggle('scrolly-short', windowPosition);
});

// ----------------for opening dropdowns
const userdd = document.querySelector("#userDropDown");
const userddBTN = document.querySelector("#user-menu-right");

function userMenuDropdown() {
  userdd.classList.toggle("show");
  console.log('open dropdown');
}


// --------------------location dropdown
const locationn = document.querySelector(".locationDD");
const locationBTN = document.querySelector(".location");
const checkinn = document.querySelector(".checkin");
function showfunction() {
  locationn.classList.toggle("showLocation");
  locationBTN.classList.toggle("showLocationBTN");
  checkinn.classList.toggle("checkinBRD")
  console.log("open dropdown for location");
}

// ------for Close the dropdown if the user clicks outside of it
// document.onclick = function (e) {
//   console.log("outer close dropdown if");
//   if (e.target.id !== 'userdd' && e.target.id !== 'userddBTN') {
//     userdd.classList.remove("show");
//     console.log("inner close dropdown if");
//   }
// }

// $(document).click(function (event) {
//   if (!$(event.target).closest(userdd).length) {
//     userdd.style.display = "none";
//     console.log("aaaaaaa");
//   }
// });



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