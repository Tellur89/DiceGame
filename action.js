var p1 = prompt("Player 1 name:");
var p2 = prompt("Player 2 name:");


document.querySelectorAll(".dice p")[0].innerHTML =p1;
document.querySelectorAll(".dice p")[1].innerHTML =p2;

function refresh(){

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImageNumber = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImageNumber;
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImageNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImageNumber2;
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomImageSource>randomImageSource2){
  document.querySelector("h1").innerHTML = p1 + " Wins!";
}
else if (randomImageSource<randomImageSource2){
  document.querySelector("h1").innerHTML = p2 + " Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
}
