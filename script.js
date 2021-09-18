// --------------for scrolling verticaly 
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    let scrollSec = document.getElementsByClassName('scrolly-nav')[0];
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
    scrollSec.classList.toggle('scrolly-short', windowPosition);
    guestsBTN.classList.remove("showGuestBTN", windowPosition);
    pinkSearch.classList.remove("searchShowG", windowPosition);
    pinkSearch.classList.remove("searchShow", windowPosition);
    guedtsDD.classList.remove("guedtsDDshow", windowPosition);
    scrollExp.classList.remove("showExperience" , windowPosition);

    guestss.addEventListener('click', function () {
        header.classList.add('scrollyClick');
        scrollSec.classList.add('scrolly-short-click');
    });
    header.classList.remove('scrollyClick');
    scrollSec.classList.remove('scrolly-short-click');
});
// close small nav

// FUNCTION WHEN WE CLICCK ON NAVBAR IN SMALLDEVICE
const smallNav = document.getElementsByClassName('scrolly-nav')[0];
const smallHeader = document.querySelector('header');
const SmallLoc = document.querySelector('.location');

function openNavS() {
    smallNav.classList.toggle("showSmallNavDD");
    smallHeader.classList.toggle("showSmallHeaderDD");
}
// function for clode dropdown in small nav
// closeIcon = document.querySelector('.close-icon');
// closeIcon.addEventListener('click', CloseIt());
// function CloseIt(){
//     smallHeader.classList.remove("showSmallHeaderDD");
//     smallNav.classList.remove("showSmallNavDD");
// }
// function closeIconNav (){
//     smallHeader.classList.remove("showSmallHeaderDD");
//     smallNav.classList.remove("showSmallNavDD");
// }


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


//swiper slider
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




//modal
var modalMoneyContent = document.getElementById("modal__container-money")
var modalLangContent = document.getElementById("modal__container-lang")
var modalExploreContent = document.getElementById("modal__container-explore")

var overlayclose= document.getElementById('overlay')
var overlaycloseLan= document.getElementById('overlay-lang')
var overlaycloseExplore= document.getElementById('overlay-explore')


var modalMoneyBtn = document.getElementById("modal-money-btn")

const body = document.querySelector("body")

modalMoneyBtn.addEventListener("click", () => {
  modalMoneyContent.style.display = "block";
  
})

$('#modal-explore-btn').click(function(){
    modalExploreContent.style.display = "block";
  })

$("#close-money").click(function(){
  modalMoneyContent.style.display = "none";
})
$("#close-lang").click(function(){
  modalLangContent.style.display = "none";
})

$("#close-explore").click(function(){
    modalExploreContent.style.display = "none";
  })

$('#modal-lang-btn').click(function(){
  modalLangContent.style.display = "block";
})

// When the user clicks anywhere outside of the modal, close it
$(document).click(function (event) {
  
  if (event.target == overlayclose || event.target == overlaycloseLan || event.target == overlaycloseExplore ) {
    modalMoneyContent.style.display = "none"; 
    modalLangContent.style.display = "none"; 
    modalExploreContent.style.display="none";
  }
})


// hide nav footer
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   if(window.pageYOffset > 10){
//     document.getElementById("navbar").style.bottom = "-100px";
//   }
//   else{
//         document.getElementById("navbar").style.bottom = "0";
//   }
// }

var navbar = document.getElementById("footer-offset");
var sticky = navbar.offsetTop;

// var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  console.log(window.pageYOffset)
  console.log(sticky)
  // if(window.pageYOffset > 10){
  //   document.getElementById("navbar").style.bottom = "-100px";
  // }
  // else{
  //       document.getElementById("navbar").style.bottom = "0";
  // }

  if (window.pageYOffset < sticky) {
   
    document.getElementById("navbar").style.bottom = "0";
    
    } else {
      // 
      document.getElementById("navbar").style.bottom = "-100px";
    }

}

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky")
//   } else {
//   navbar.classList.remove("sticky");
//   }
// }

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   // console.log(currentScrollPos )
//   console.log(prevScrollpos )
//   if (prevScrollpos > currentScrollPos) {
//     console.log("-100")
//     document.getElementById("navbar").style.bottom = "-10";
//   } else {
//     console.log("0")
//     document.getElementById("navbar").style.bottom = "0";
//   }
//   prevScrollpos = currentScrollPos;
// }



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

//explore btn
function openOption(evt,Optionname) {
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName("tab-btn");
    tabcontent = document.getElementsByClassName("tab-content-1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    document.getElementById(Optionname).style.display = "flex";
} 

//calendar  configuration
// configObject = {
//   autoClose: false,
//   format: 'YYYY-MM-DD',
//   separator: ' to ',
//   language: 'auto',
//   startOfWeek: 'sunday',// or monday
//   getValue: function () {
//     return $(this).val();
//   },
//   setValue: function (s) {
//     if (!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val()) {
//       $(this).val(s);
//     }
//   },
//   startDate: false,
//   endDate: false,
//   time: {
//     enabled: false
//   },
//   minDays: 0,
//   maxDays: 0,
//   showShortcuts: false,
//   shortcuts:
//   {
//     //'prev-days': [1,3,5,7],
//     //'next-days': [3,5,7],
//     //'prev' : ['week','month','year'],
//     //'next' : ['week','month','year']
//   },
//   customShortcuts: [],
//   inline: false,
//   container: 'body',
//   alwaysOpen: false,
//   singleDate: false,
//   lookBehind: false,
//   batchMode: false,
//   duration: 200,
//   stickyMonths: false,
//   dayDivAttrs: [],
//   dayTdAttrs: [],
//   applyBtnClass: '',
//   singleMonth: 'auto',
//   hoveringTooltip: function (days, startTime, hoveringTime) {
//     return days > 1 ? days + ' ' + lang('days') : '';
//   },
//   showTopbar: true,
//   swapTime: false,
//   selectForward: false,
//   selectBackward: false,
//   showWeekNumbers: false,
//   getWeekNumber: function (date) //date will be the first day of a week
//   {
//     return moment(date).format('w');
//   },
//   monthSelect: false,
//   yearSelect: false
// }

// //calendar js
// $('#dom-id').dateRangePicker(configObject);

