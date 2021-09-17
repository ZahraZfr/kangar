// --------------for scrolling verticaly 
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
  scrollSec.classList.toggle('scrolly-short', windowPosition);
  guestsBTN.classList.remove("showGuestBTN", windowPosition);
  pinkSearch.classList.remove("serachShowG", windowPosition);
  guedtsDD.classList.remove("guedtsDDshow", windowPosition);
  pinkSearch.classList.remove("serachShow", windowPosition);
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
  locationn.classList.add("showLocation");
  locationBTN.classList.add("showLocationBTN");
  checkinn.classList.add("checkinSEC");
  checkoutt.classList.add("checkoutSEC");
  guestss.classList.add("guestsSEC");
  pinkSearch.classList.add("serachShow");
  console.log("open dropdown for location");
}
// ---------------------guests dropdown
function showGuestsF() {
  guestsBTN.classList.add("showGuestBTN");
  pinkSearch.classList.add("serachShowG");
  guedtsDD.classList.add("guedtsDDshow");
  checkoutt.classList.add("checkoutSECBRD");
  checkinn.classList.add("checkinG");
  checkoutt.classList.add("checkoutG");
  locationBTN.classList.add("locationG");
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
  if ((!$(event.target).closest(guedtsDD).length) && (!$(event.target).closest(guestsBTN).length)) {
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
    console.log("increase");
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
    console.log("decrease");
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
    console.log("increase Infants");
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
    console.log("decrease Infants");
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
    console.log("increase");
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
    console.log("decrease");
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
btnTab = document.getElementsByClassName("tab-btn")

function openCity(evt, Cityname) {
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
//modal
var modalMoneyContent = document.getElementById("modal__container-money")
var modalLangContent = document.getElementById("modal__container-lang")



var overlayclose= document.getElementById('overlay')
var overlaycloseLan= document.getElementById('overlay-lang')
var modalMoneyBtn = document.getElementById("modal-money-btn")

modalMoneyBtn.addEventListener("click", () => {
  modalMoneyContent.style.display = "block";
})

$(document).click(function (event) {
  
  if (event.target == overlayclose || event.target == overlaycloseLan) {
    modalMoneyContent.style.display = "none"; 
    modalLangContent.style.display = "none"; 
  }
})

$("#close-money").click(function(){
  modalMoneyContent.style.display = "none";
})
$("#close-lang").click(function(){
  modalLangContent.style.display = "none";
})
$('#modal-lang-btn').click(function(){
  modalLangContent.style.display = "block";

})


// When the user clicks anywhere outside of the modal, close it



//hide nav footer

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  if(window.pageYOffset > 3000){
    document.getElementById("navbar").style.bottom = "-100px";
  }
  else{
        document.getElementById("navbar").style.bottom = "0";
  }
}

