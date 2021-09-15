// --------------for scrolling verticaly 
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
  scrollSec.classList.toggle('scrolly-short', windowPosition);
  guestsBTN.classList.remove("showGuestBTN", windowPosition);
  pinkSearch.classList.remove("searchShowG", windowPosition);
  pinkSearch.classList.remove("searchShow", windowPosition);
  guedtsDD.classList.remove("guedtsDDshow", windowPosition);
});
// back to place to stay
const placesToStay = document.querySelector(".nav-list1");
let scrollyNPlaces = document.getElementsByClassName('scrolly-nav')[0];

function firstTab() {
  scrollExp.classList.remove("showExperience");
}
// experience tab
const experienceTab = document.querySelector('.nav-list2');
const ExperienceTab1 = document.querySelector('.ExperienceTab1');
const ExperienceTab2 = document.querySelector('.ExperienceTab2');
const DateDD = document.querySelector("#LocDropdown");
const scrollExp = document.getElementsByClassName('scrolly-nav')[0];
const pinkSearchDD = document.querySelector(".search-DD");
// experience tab
function showExperience() {
  scrollExp.classList.add("showExperience");
}
// experience date tab
function showDataExp() {
  ExperienceTab2.classList.add("showDateBTN");
  pinkSearchDD.classList.add("searchShowDDD");
}
// experience location tab
function showLocExp() {
  DateDD.classList.add("activeFlex");
  ExperienceTab1.classList.add("showLocationBTN");
  pinkSearchDD.classList.add("searchShowDD");
}

// underline for navbar item
const navLi1 = document.querySelector(".nav-list1");
const navUL = document.querySelector(".nav-list");
function openItem(event) {
  tabItem = document.getElementsByClassName("nav-list-i");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].className = tabItem[i].className.replace(" ShowUnderline", "");

  }

  event.currentTarget.className += " ShowUnderline";

  // document.getElementById(Cityname).style.display = "flex";
}

// ----------------for opening dropdowns
const userdd = document.querySelector("#userDropDown");
const userddBTN = document.querySelector("#user-menu-right");

function userMenuDropdown() {
  userdd.classList.toggle("show");
}


// ----------- scrolly const
const locationn = document.querySelector(".locationDD");
const locationBTN = document.querySelector(".location");
const checkinn = document.querySelector(".checkin");
const checkoutt = document.querySelector(".checkout");
const guestss = document.querySelector(".guests");
const guestsBTN = document.querySelector(".guests");
const guedtsDD = document.querySelector(".guestsDD");
const pinkSearch = document.querySelector(".search-icon");
// --------------------location dropdown
function showLocationF() {
  locationn.classList.add("showLocation");
  locationBTN.classList.add("showLocationBTN");
  checkinn.classList.add("checkinSEC");
  checkoutt.classList.add("checkoutSEC");
  guestss.classList.add("guestsSEC");
  pinkSearch.classList.add("searchShow");
}
// ---------------------guests dropdown
function showGuestsF() {
  guestsBTN.classList.add("showGuestBTN");
  pinkSearch.classList.add("searchShowG");
  guedtsDD.classList.add("guedtsDDshow");
  checkoutt.classList.add("checkoutSECBRD");
  checkinn.classList.add("checkinG");
  checkoutt.classList.add("checkoutG");
  locationBTN.classList.add("locationG");
}

// --------closer dropdown of signin btn
$(document).click(function (event) {
  // for location experience
  if ((!$(event.target).closest(DateDD).length) && (!$(event.target).closest(ExperienceTab1).length)) {
    DateDD.classList.remove("activeFlex");
    ExperienceTab1.classList.remove("showLocationBTN");
    pinkSearchDD.classList.remove("searchShowDD");

  }
  if ((!$(event.target).closest(ExperienceTab2).length) && (!$(event.target).closest(ExperienceTab2).length)) {
    pinkSearchDD.classList.remove("searchShowDDD");
    ExperienceTab2.classList.remove("showDateBTN");
  }
  // for signin
  if ((!$(event.target).closest(userdd).length) && (!$(event.target).closest(userddBTN).length)) {
    userdd.classList.remove("show")
  }
  // for location
  if ((!$(event.target).closest(locationn).length) && (!$(event.target).closest(locationBTN).length)) {
    locationn.classList.remove("showLocation");
    locationBTN.classList.remove("showLocationBTN");
    checkinn.classList.remove("checkinSEC");
    checkoutt.classList.remove("checkoutSEC");
    pinkSearch.classList.remove("searchShow");
  }
  // for guests
  if ((!$(event.target).closest(guedtsDD).length) && (!$(event.target).closest(guestsBTN).length)) {
    guestsBTN.classList.remove("showGuestBTN");
    pinkSearch.classList.remove("searchShowG");
    guedtsDD.classList.remove("guedtsDDshow");
    checkoutt.classList.remove("checkoutSECBRD");
    checkinn.classList.remove("checkinG");
    checkoutt.classList.remove("checkoutG");
    locationBTN.classList.remove("locationG");
  }

});




// ------------- child counter --------------------------
const childCoun = document.querySelector(".childrenNum");
const decChild = document.querySelector(".decBtnChild");
const incChild = document.querySelector(".IncBtnChild");
let countervalueC = 0;
// ----for increase
incChild.addEventListener('click', function (event) {
  if (countervalueC < 5) {
    countervalueC += 1;
    childCoun.innerHTML = countervalueC;
    incChild.classList.remove("forbiddenIcon");
  } else {
    incChild.classList.add("forbiddenIcon");
  }
});
//-----for decrease
decChild.addEventListener('click', function (event) {
  if (countervalueC > 0) {
    countervalueC -= 1;
    childCoun.innerHTML = countervalueC;
    decChild.classList.remove("forbiddenIcon");
  } else {
    decChild.classList.add("forbiddenIcon");
  }
});


// ------------- Infants counter --------------------------
const InfantsNum = document.querySelector(".InfantsNum");
const decInfants = document.querySelector(".decBtnInfants");
const incInfants = document.querySelector(".IncBtnInfants");
let countervalueI = 0;
// ----for increase
incInfants.addEventListener('click', function (event) {
  console.log("------------------------------")
  if (countervalueI < 5) {
    countervalueI += 1;
    InfantsNum.innerHTML = countervalueI;
    incInfants.classList.remove("forbiddenIcon");
  } else {
    incInfants.classList.add("forbiddenIcon");
  }
});
//-----for decrease
decInfants.addEventListener('click', function (event) {
  if (countervalueI > 0) {
    countervalueI -= 1;
    InfantsNum.innerHTML = countervalueI;
    decInfants.classList.remove("forbiddenIcon");
  } else {
    decInfants.classList.add("forbiddenIcon");
  }
});



// ------------- Adult counter ----------------------------------
const adualtCoun = document.querySelector(".adultNum");
const decAdualt = document.querySelector(".decBtnAdults");
const incAdualt = document.querySelector(".IncBtnAdults");
let countervalueA = 0;
// ----for increase
incAdualt.addEventListener('click', function (event) {
  if (countervalueA < 15) {
    countervalueA += 1;
    adualtCoun.innerHTML = countervalueA;
    incAdualt.classList.remove("forbiddenIcon");
  } else {
    incAdualt.classList.add("forbiddenIcon");
  }
});
//-----for decrease
decAdualt.addEventListener('click', function (event) {
  if (countervalueA > 0) {
    countervalueA -= 1;
    adualtCoun.innerHTML = countervalueA;
    decAdualt.classList.remove("forbiddenIcon");
  } else {
    decAdualt.classList.add("forbiddenIcon");
  }
});



var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



var swiper = new Swiper(".my2Swiper", {

  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// -------------exolore nearby section
// const init = function(){
// 	let items = document.querySelectorAll('.explor-item');
// 	cssScrollSnapPolyfill()
// }
// init();


//top of footer
btnTab =document.getElementsByClassName("tab-btn")
function openCity(evt,Cityname){
  var i, tabcontent, tablinks;
   
  tablinks = document.getElementsByClassName("tab-btn");
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
  document.getElementById(Cityname).style.display = "flex";
}

