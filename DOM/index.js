// for dice 1

var randomNumber1 = Math.floor(Math.random * 6)+1;

var randomImagSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , "randomImagSource");


// for dice 2

var randomNumber2 = Math.floor(Math.random * 6)+1;

var  randomImagSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(img)[1].setAttribute("src" , "randomImagSource2");