const body = document.getElementsByTagName("body")[0];
const html = document.getElementsByTagName("html")[0];


//Button background

let backgroundImg = document.getElementsByClassName("mainContent")[0];
let btnRight = document.getElementsByClassName("btnright")[0];
let btnLeft = document.getElementsByClassName("btnleft")[0];

let index = 0;

btnLeft.addEventListener("click", left);
btnRight.addEventListener("click", right);


function left() {
  index -= 1;

  if (index == -1) {
    index = 7;
  }

  if (index == 0) {

    backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-digital-city-art-npcp6jc782ixp9zs.jpg')";

    btnRight.style.color = "black";
    btnLeft.style.color = "black";

  } else {

    btnRight.style.color = "white";
    btnLeft.style.color = "white";
  }



  changeBg(index);

}

function right() {
  index += 1;

  if (index == 8) {
    index = 0;
  }

  if (index == 0) {

    backgroundImg.style.backgroundImage = "url('https://wallpapers.com/images/high/amazon-digital-city-art-npcp6jc782ixp9zs.jpg')";
    btnRight.style.color = "black";
    btnLeft.style.color = "black";

  } else {


    btnRight.style.color = "white";
    btnLeft.style.color = "white";

  }

  changeBg(index);
}

function changeBg(index) {

  switch (index) {


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

let closeListOp = document.getElementById("xBtn");

let showBoxBtn = document.getElementsByClassName("openBoxBtn")[0];
let navMain = document.getElementsByClassName("navMain")[0];

let shadowShow = document.getElementById("shadow");
let htmlOverflow = document.getElementsByTagName("html")[0];

closeListOp.addEventListener("click", closeBox);
showBoxBtn.addEventListener("click", showBox);
shadowShow.addEventListener("click", closeBox)


let openTimer;
let closeTimer;
let elem = document.getElementById("allListContainer");

let position = -380;

function showBox() {

  clearInterval(openTimer);


  openTimer = setInterval(frame, 1);

  function frame() {

    if (position == 0) {

      clearInterval(openTimer);

    } else {

      position += 10;
      elem.style.left = position + 'px';

    }

  }
  shadowShow.style.backgroundColor = "rgb(0 0 0 / 81%)";
  shadowShow.style.display = "block";
  htmlOverflow.style.overflow = "hidden";

}

function closeBox() {


  clearInterval(closeTimer);

  closeTimer = setInterval(frameC, 1);

  function frameC() {

    if (position == -380) {

      clearInterval(closeTimer);

    } else {

      position -= 10;
      elem.style.left = position + 'px';

    }

  }

  shadowShow.style.display = "none";
  htmlOverflow.style.overflow = "auto";
}

//SearchBox border

let sBox = document.getElementsByClassName("searchBox")[0];

sBox.addEventListener("click", addBorder);

function addBorder() {
  sBox.style.border = "2px solid black";
}

//BtnSignIn

const signInBtn = document.getElementsByClassName("btnSignIn");

for(i = 0; i < signInBtn.length; i++){
  signInBtn[i].addEventListener("click", function(){
    window.open("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&", "_self");
  })
}

//Amazon Logo

const logoBox = document.getElementsByClassName("logoBox");

for(i = 0; i < logoBox.length; i++){
  logoBox[i].addEventListener("click", x = () =>{
    location.reload();
  })
}

//Animation Carroussel

let btnLeftCarroussel = document.getElementById("leftbtn");
let btnRightCarroussel = document.getElementById("rightbtn");
let divBox = document.getElementById("moveBox");

let movepx = 0;
let id = 0;
let id2 = -2828;
let anterior = 0,
  siguiente = 0;


let timeOut;
let timerOpen;

btnLeftCarroussel.addEventListener("click", moveLeft);
btnRightCarroussel.addEventListener("click", moveRight);

function moveLeftAnimation() {


  clearInterval(timerOpen);
  clearTimeout(timeOut);
  clearInterval(closeTimer);

  let timer1 = setInterval(frame, 1);

  function frame() {

    if (id == 40) {

      clearInterval(timer1);

    } else {


      id += 1;
      divBox.style.left = id + "px";

      if (id == 40) {
        setOriginal();
      }


    }


  }

  id = 0;

}

function setOriginal() {

  clearInterval(timerOpen);
  clearTimeout(timeOut);
  timerOpen = setInterval(frameC, 1);


  function frameC() {

    if (id > 0) {
      id -= 1;
      divBox.style.left = id + "px";


    } else {
      clearTimeout(timeOut);
      clearInterval(timerOpen);
    }
  }


}

function moveRight() {


  if (movepx == -3444) {

    moveRightAnimation();
  } else {

    movepx -= 1218;

  }

  if (movepx <= -3445) {
    movepx = -3444;
  } else {


    clearInterval(openTimer);
    clearTimeout(timeOut);
    clearInterval(closeTimer);

    openTimer = setInterval(frame, 1);

    function frame() {

      if (anterior >= movepx) {

        divBox.style.left = anterior + "px";
        anterior -= 12;

      }

    }

  }

}




function moveLeft() {

  if (movepx == 0) {

    moveLeftAnimation();
  } else {

    movepx += 1218;

  }


  if (movepx > 0) {
    movepx = 0;
  } else {

    clearInterval(openTimer);
    clearTimeout(timeOut);
    clearInterval(closeTimer);

    openTimer = setInterval(frame, 1);

    function frame() {

      if (anterior <= movepx) {

        divBox.style.left = anterior + "px";
        anterior += 12;

      }

    }
  }


}

function moveRightAnimation() {

  clearInterval(timerOpen);
  clearTimeout(timeOut);
  clearInterval(closeTimer);

  timer1 = setInterval(frame, 1);

  function frame() {

    if (id2 == -3484) {

      clearInterval(timer1);

    } else {

      id2 -= 1;
      divBox.style.left = id2 + "px";

      if (id2 == -3484) {
        setOriginal2();
      }



    }
  }

  id2 = -3444;

}

function setOriginal2() {

  clearInterval(closeTimer);
  clearTimeout(timeOut);
  closeTimer = setInterval(frameC, 1);


  function frameC() {

    if (id2 <= -3444) {

      id2 += 1;
      divBox.style.left = id2 + "px";


    } else {

      clearTimeout(timeOut);
      clearInterval(closeTimer);
    }

  }


}

//Button scroll to top

const topBtn = document.getElementById("backTop");

topBtn.addEventListener("click", scroll2Top);

function scroll2Top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; //Others
}


//Main Shadow

const showGeneralShadow = document.getElementById("generalShadowBox");
const btnLangBox = document.getElementById("changeLangBox");
const allBtnLangBox = document.getElementsByClassName("changeLang");
const btnSigInBox = document.getElementById("signInBox");
const bodyBox = document.getElementsByTagName("main")[0];



btnLangBox.addEventListener("mouseover", showShadow);
btnLangBox.addEventListener("mouseout", hideShadow);

btnSigInBox.addEventListener("click", function(){
  window.open("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&", "_self");
});

for(i = 0; i < allBtnLangBox.length; i++){
  allBtnLangBox[i].addEventListener("click", x = () => {
  window.open("https://www.amazon.com/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Fref%3Dnav_logo&ref_=topnav_lang_ais", "_self");
});
}

btnSigInBox.addEventListener("mouseover", showShadow);
btnSigInBox.addEventListener("mouseout", hideShadow);




//Click outside searchBar

//Click out prototype

const searchBox = document.getElementsByClassName("searchBox")[0];
const searchBar = document.getElementsByClassName("searchBar")[0];
const searchIcon = document.getElementsByClassName("searchIcon")[0];

searchBar.addEventListener("click", clickOut);
document.addEventListener("click", clickOut);

let contClick = 0;

function clickOut(event) {

  const isClickInside = searchBar.contains(event.target);

  if (isClickInside) {

    showGeneralShadow.style.display = "flex";
    contClick = 1;
    searchBox.style.border = "3px solid orange";


  } else if (!isClickInside && contClick == 1) {

    showGeneralShadow.style.display = "none";
    searchBox.style.border = "0px";
    searchIcon.style.borderLeft = "2px solid";

    contClick = 0;

  }

}


function showShadow() {

  showGeneralShadow.style.display = "flex";

}

function hideShadow() {
  showGeneralShadow.style.display = "none";

}

//Return & Orders

const returnOrders = document.getElementById("returnOrders");
returnOrders.addEventListener("click", x = () =>{ window.open("https://www.amazon.com/gp/css/order-history?ref_=nav_orders_first", "_self"); });

//Website Country

const websiteCountry = document.getElementById("websiteCountry");
websiteCountry.addEventListener("click", x = () => { window.open("https://www.amazon.com/customer-preferences/country?ie=UTF8&preferencesReturnUrl=%2F%3Fref_%3Dfooter_logo&ref_=footer_icp_cp", "_self") });


//Cart Shop 

const cartShop = document.getElementById("cartShop");


cartShop.addEventListener("click", function(){
  window.open("https://www.amazon.com/gp/cart/view.html?ref_=nav_cart", "_self");
})



//Deliver to 

const countryListContainer = document.getElementById("countryListContainer");
const locationPopBox = document.getElementById("locationPopBox");
const country = document.getElementsByClassName("country")[0];

country.addEventListener("click", showLocationBox);



function showLocationBox() {

  locationPopBox.style.display = "block";
  shadowShow.style.display = "block";

 


  shadowShow.style.backgroundColor = "rgba(0, 0, 0, 0.527)";

  html.style.overflowY = "hidden";
  body.style.overflowY = "scroll";
  countryListContainer.style.display = "none";
  document.addEventListener("click", clickOut2);
  

}


function clickOut2(event) {
  
  let isClickOutside = shadowShow.contains(event.target);

  if (isClickOutside == true) {

    shadowShow.style.display = "none";
    locationPopBox.style.display = "none";
    html.style.overflowY = "visible";
   
  } 
}

//Choose country Option


const selectBtn = document.getElementById("selectCountry");
let countryOp = document.getElementsByClassName("pCountry");


selectBtn.addEventListener("click", showListCountry);

function showListCountry() {
  countryListContainer.style.display = "block";
  
}


let currentlyCountry = document.getElementById("currentlyCountry");

// for(i = 0; i < countryOp.length; i++){

//   countryOp[i].addEventListener("click", getName => {
//     currentlyCountry.innerHTML = getName.target.innerHTML;
//     countryListContainer.style.display = "none";
//   });
  
// }

for(i = 0; i < countryOp.length; i++){

  countryOp[i].addEventListener("click", function (getName){
    currentlyCountry.innerHTML = getName.target.innerHTML;
    countryListContainer.style.display = "none";
  });
  
}




const closeDeliverTo =  document.getElementsByClassName("closeDeliverTo");
let countrySpan = document.getElementById("countrySpan");

for(i = 0; i < closeDeliverTo.length; i++){

closeDeliverTo[i].addEventListener("click", function(){

  countrySpan.innerHTML = currentlyCountry.innerHTML;
  shadowShow.style.display = "none";
  locationPopBox.style.display = "none";
  html.style.overflowY = "visible";

});

}
