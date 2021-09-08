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


// ----------- scrolly const
const locationn = document.querySelector(".locationDD");
const locationBTN = document.querySelector(".location");
const checkinn = document.querySelector(".checkin");
const checkoutt = document.querySelector(".checkout");
const guestss = document.querySelector(".guests");
const guestsBTN = document.querySelector(".guests");
const guedtsDD = document.querySelector(".guestsDD");
const pinkSearch = document.querySelector(".serach-icon");
// --------------------location dropdown
function showLocationF() {
  locationn.classList.toggle("showLocation");
  locationBTN.classList.toggle("showLocationBTN");
  checkinn.classList.toggle("checkinSEC");
  checkoutt.classList.toggle("checkoutSEC");
  guestss.classList.toggle("guestsSEC");
  pinkSearch.classList.toggle("serachShow");
  console.log("open dropdown for location");
}
// ---------------------guests dropdown
function showGuestsF() {
  guestsBTN.classList.toggle("showGuestBTN");
  pinkSearch.classList.toggle("serachShowG");
  guedtsDD.classList.toggle("guedtsDDshow");
  checkoutt.classList.toggle("checkoutSECBRD");
  checkinn.classList.toggle("checkinG");
  checkoutt.classList.toggle("checkoutG");
  locationBTN.classList.toggle("locationG");
  console.log("open dropdown for guests");
}

// --------closer dropdown of signin btn
$(document).click(function (event) {
  // for signin
  if ((!$(event.target).closest(userdd).length) && (!$(event.target).closest(userddBTN).length)) {
    userdd.classList.remove("show")
    console.log("close drop down");
  }
  // for location
  if ((!$(event.target).closest(locationn).length) && (!$(event.target).closest(locationBTN).length)) {
    locationn.classList.remove("showLocation");
    locationBTN.classList.remove("showLocationBTN");
    checkinn.classList.remove("checkinSEC");
    checkoutt.classList.remove("checkoutSEC");
    pinkSearch.classList.remove("serachShow");
    console.log("close drop down location");
  }
  // for guests
  if ((!$(event.target).closest(guestsBTN).length) && (!$(event.target).closest(guestsBTN).length)) {
    guestsBTN.classList.remove("showGuestBTN");
    pinkSearch.classList.remove("serachShowG");
    guedtsDD.classList.remove("guedtsDDshow");
    checkoutt.classList.remove("checkoutSECBRD");
    checkinn.classList.remove("checkinG");
    checkoutt.classList.remove("checkoutG");
    locationBTN.classList.remove("locationG");
    console.log("close drop down guests");
  }
});

//tablet slider

const arrowRight = document.querySelector('.arrow-r')
const arrowLeft = document.querySelector('.arrow-l')
const mainCard = document.querySelector('.main-card')
arrowRight.addEventListener("click", () => {
  mainCard.classList.add("go-left")
  arrowLeft.classList.add("active")
  arrowRight.classList.add("hide")

})

arrowLeft.addEventListener("click", () => {
  mainCard.classList.remove("go-left")
  arrowLeft.classList.remove("active")
  arrowRight.classList.remove("hide")
})