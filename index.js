"use strict";

//HTML Elements

const html = document.querySelector("html");

//Button background

const backgroundImg = document.getElementById("mainContent");
const btnRight = document.getElementById("btnright");
const btnLeft = document.getElementById("btnleft");

let indexBackgroundImage = 0;

btnLeft.addEventListener("click", () => {
  indexBackgroundImage -= 1;

  indexBackgroundImage = indexBackgroundImage === -1 ? 7 : indexBackgroundImage;

  changeButtonsColors();

  changeBackgroundImage(indexBackgroundImage);
});

btnRight.addEventListener("click", () => {

  indexBackgroundImage += 1;
  indexBackgroundImage = indexBackgroundImage === 8 ? 0 : indexBackgroundImage;
  changeButtonsColors();
  changeBackgroundImage();

});

function changeButtonsColors() {
  if (indexBackgroundImage === 0) {

    backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-digital-city-art-npcp6jc782ixp9zs.jpg')";
    btnRight.style.color = "black";
    btnLeft.style.color = "black";

  } else {

    btnRight.style.color = "white";
    btnLeft.style.color = "white";

  }
}

function changeBackgroundImage() {

  switch (indexBackgroundImage) {

    case 1:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-music-streaming-platform-9nel6n0qtdvstx16.jpg')";

      break;

    case 2:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-e-commerce-company-csw7ypxppsqd7yyr.jpg')";
      break;

    case 3:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-building-outline-art-y4ndxxccud17nzek.jpg')";

      break;

    case 4:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-street-sign-e1f0o2clwowm3dmx.jpg')";

      break;

    case 5:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-aqua-blue-ow2yp0u4ejajsf1p.jpg')";

      break;

    case 6:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-gold-logo-m2ej11u578o5auus.jpg')";

      break;

    case 7:
      backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-logo-on-yellow-background-uxcyzx9upw4p7cv9.jpg')";

      break;

  }


}

//ShowBoxList

const closeDropdownBtn = document.getElementById("closeDropdown");
const openDropDownMenuBtn = document.getElementById("openDropDownMenuBtn");
const modalDropDown = document.getElementById("modalDropDown");

closeDropdownBtn.addEventListener("click", closeDropDownMenu);
openDropDownMenuBtn.addEventListener("click", showDropDownMenu);
modalDropDown.addEventListener("click", closeDropDownMenu)


let openCloseDropdownInterval;

const dropDownContainer = document.getElementById("dropDownContainer");



function showDropDownMenu() {

  let positionPxDropdown = -380;

  clearInterval(openCloseDropdownInterval);

  openCloseDropdownInterval = setInterval(() => {
    positionPxDropdown === 0 ? clearInterval(openCloseDropdownInterval) : (positionPxDropdown += 10, dropDownContainer.style.left = `${positionPxDropdown}px`);
  }, 1);

  modalDropDown.style.display = "block";
  //todo: change to 100vh or something
  // modalDropDown.style.height = `${window.innerWidth}px`;
  html.style.overflow = "hidden";

}

function closeDropDownMenu() {

  let positionPxDropdown = 0;

  clearInterval(openCloseDropdownInterval);

  openCloseDropdownInterval = setInterval(() => {
    positionPxDropdown === -380 ? clearInterval(openCloseDropdownInterval) : (positionPxDropdown -= 10, dropDownContainer.style.left = `${positionPxDropdown}px`);
  }, 1);

  modalDropDown.style.display = "none";
  html.style.overflow = "auto";
}

//SearchBox border

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("click", () => {
  searchBox.style.border = "2px solid black";
});

//BtnSignIn

const btnSignIn = document.getElementsByClassName("btnSignIn");

for (let i = 0; i < btnSignIn.length; i++) {

  btnSignIn[i].addEventListener("click", function () {
    window.open("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&", "_self");
  })

}

//Amazon Logo

const amazonLogo = document.getElementsByClassName("amazonLogoContainer");

for (let i = 0; i < amazonLogo.length; i++) {
  amazonLogo[i].addEventListener("click", () => {
    location.reload();
  })
}

//Animation Carroussel

const btnLeftCarroussel = document.getElementById("leftBtnCarroussel");
const btnRightCarroussel = document.getElementById("rightBtnCarroussel");
const mobileBoxCarroussel = document.getElementById("mobileBoxCarroussel");

let movePx = 0, movePxFirstBook = 0, movePxLastBook = -2828;

let pxToMoveCarroussel = 0;

let intervalMovement = 0;
let animationInterval = 0;
let firstLastBookAnimationInterval = 0;


btnLeftCarroussel.addEventListener("click", moveLeftClick);
btnRightCarroussel.addEventListener("click", moveRightClick);

//When you click on the left button of the carroussel



function clearAllIntervals() {

  clearInterval(intervalMovement);
  clearInterval(animationInterval);
  clearInterval(firstLastBookAnimationInterval);

}

function moveLeftClick() {


  clearAllIntervals();

  movePx === 0 ? moveToLeftAnimation() : movePx += 1218;

  if (pxToMoveCarroussel <= movePx) {
    if (movePx > 0)
      movePx = 0;

    intervalMovement = setInterval(() => {
      pxToMoveCarroussel <= movePx ? (mobileBoxCarroussel.style.left = `${pxToMoveCarroussel}px`, pxToMoveCarroussel += 12) : clearInterval(intervalMovement);
    }, 1);
  }


}

//When you click on the right button of the carroussel

function moveRightClick() {

  clearAllIntervals();

  movePx === -3444 ? moveToRightAnimation() : movePx -= 1218;

  if (movePx <= -3445)
    movePx = -3444;

  intervalMovement = setInterval(() => {
    pxToMoveCarroussel >= movePx ? (mobileBoxCarroussel.style.left = `${pxToMoveCarroussel}px`, pxToMoveCarroussel -= 12) : clearInterval(intervalMovement);
  }, 1);
}


//Carroussel movement animation

function moveToLeftAnimation() {

  clearAllIntervals();

  animationInterval = setInterval(() => {

    if (movePxFirstBook === 40)
      clearInterval(animationInterval);

    else {
      movePxFirstBook += 1;
      mobileBoxCarroussel.style.left = `${movePxFirstBook}px`;
      movePxFirstBook === 40 ? getBackToOriginalPlaceLeft() : '';
    }
  }, 1);

  movePxFirstBook = 0;
}

function moveToRightAnimation() {
  clearAllIntervals();

  animationInterval = setInterval(() => {
    if (movePxLastBook === -3484)
      clearInterval(animationInterval);

    else {

      movePxLastBook -= 1;
      mobileBoxCarroussel.style.left = `${movePxLastBook}px`;
      movePxLastBook === -3484 ? getBackToOriginalPlaceRight() : '';

    }
  }, 1);
  movePxLastBook = -3444;

}

//When you click left but you alredy are in the first books.


function getBackToOriginalPlaceLeft() {

  firstLastBookAnimationInterval = setInterval(() => {

    movePxFirstBook > 0
      ? (movePxFirstBook -= 1, mobileBoxCarroussel.style.left = `${movePxFirstBook}px`)
      : clearInterval(firstLastBookAnimationInterval);
  }, 1);

}

//When you click right but you alredy are in the lastest books.

function getBackToOriginalPlaceRight() {

  firstLastBookAnimationInterval = setInterval(() => {

    movePxLastBook <= -3444
      ? (movePxLastBook += 1, mobileBoxCarroussel.style.left = `${movePxLastBook}px`)
      : clearInterval(firstLastBookAnimationInterval);
  }, 1);

}


//Button scroll to top

const backTopBtn = document.getElementById("backTopBtn");

backTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; //Others
});


//Modal when you hover some options

const modalHoverNavOptions = document.getElementById("modalHoveringOptions");
const btnNavLangBox = document.getElementById("changeLangBox");
const languagesOptionNavLangBox = document.getElementsByClassName("changeLang");

const btnSigInNavBox = document.getElementById("signInNavBox");

//Hovering Nav Language Option

btnNavLangBox.addEventListener("mouseover", () => { modalHoverNavOptions.style.display = "flex"; });
btnNavLangBox.addEventListener("mouseout", () => { modalHoverNavOptions.style.display = "none"; });

//Hovering Sign in Option

btnSigInNavBox.addEventListener("mouseover", () => { modalHoverNavOptions.style.display = "flex"; });
btnSigInNavBox.addEventListener("mouseout", () => { modalHoverNavOptions.style.display = "none"; });


//Add link to Sign-In Amazon 

btnSigInNavBox.addEventListener("click", function () {
  window.open("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&", "_self");
});

//Add link to language option Amazon 

for (let i = 0; i < languagesOptionNavLangBox.length; i++) {
  languagesOptionNavLangBox[i].addEventListener("click", () => {
    window.open("https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Fref%3Dnav_logo&ref_=topnav_lang_ais", "_self");
  });
}


//SearchBar

const searchBar = document.getElementById("searchBar");
let isSearchBarActive = false;

document.addEventListener("click", () => {

  //contains is a method to check if an element is descending of the parameter element
  const isClickInsideSearchBar = searchBar.contains(event.target);


  if (isClickInsideSearchBar) {

    modalHoverNavOptions.style.display = "block";
    searchBox.style.border = "3px solid orange";
    isSearchBarActive = true;

  } else if (isSearchBarActive) {

    modalHoverNavOptions.style.display = "none";
    searchBox.style.border = "0px";
    isSearchBarActive = false;
  }
});



//Return & Orders

const returnOrdersNavOption = document.getElementById("returnOrders");
returnOrdersNavOption.addEventListener("click", () => { window.open("https://www.amazon.com/gp/css/order-history?ref_=nav_orders_first", "_self"); });

//Website Country

const websiteCountryFooterBox = document.getElementById("websiteCountry");
websiteCountryFooterBox.addEventListener("click", () => { window.open("https://www.amazon.com/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F%3Fref_%3Dfooter_logo&ref_=footer_icp_cp", "_self") });


//Shopping Cart

const shoppingCartBtn = document.getElementById("shoppingCart");

shoppingCartBtn.addEventListener("click", function () {
  window.open("https://www.amazon.com/gp/cart/view.html?ref_=nav_cart", "_self");
})



//Deliver to country

const countryListContainer = document.getElementById("countryListContainer");
const chooseLocationPopBox = document.getElementById("locationPopBox");
const deliverToCountry = document.getElementById("deliverToCountryNavOption");

deliverToCountry.addEventListener("click", () => {

  chooseLocationPopBox.style.display = "block";
  modalHoverNavOptions.style.display = "block";

  html.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";

  document.addEventListener("click", clickOutsideSelectCountry);

  //scroll
});


function clickOutsideSelectCountry() {

  let isClickOutside = modalHoverNavOptions.contains(event.target);

  if (isClickOutside) {

    modalHoverNavOptions.style.display = "none";
    locationPopBox.style.display = "none";
    html.style.overflowY = "auto";
    countryListContainer.style.display = "none";

    document.removeEventListener("click", clickOutsideSelectCountry);
  }
}

//Choose country Option


const selectCountryFromList = document.getElementById("selectCountryBtn");
const nameCountryOption = document.getElementsByClassName("nameCountry");

//List of countries such: Algeria, Almenia, Bosnia...

selectCountryFromList.addEventListener("click", () => {
  countryListContainer.style.display = "block";
});

const currentlyCountry = document.getElementById("currentlyCountry");

for (let i = 0; i < nameCountryOption.length; i++) {

  nameCountryOption[i].addEventListener("click", () => {
    currentlyCountry.innerHTML = event.target.innerHTML;
    countryListContainer.style.display = "none";
  });

}

//Close select country pop box

const closeDeliverTo = document.getElementsByClassName("closeDeliverTo");
let countrySpan = document.getElementById("countrySpan");

for (let i = 0; i < closeDeliverTo.length; i++) {

  closeDeliverTo[i].addEventListener("click", () => {

    countrySpan.innerHTML = currentlyCountry.innerHTML;
    modalHoverNavOptions.style.display = "none";
    chooseLocationPopBox.style.display = "none";
    html.style.overflowY = "auto";

  });

}
