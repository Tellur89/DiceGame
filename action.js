var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImageNumber = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImageNumber;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImageNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImageNumber2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);





//Player 1 Wins
if (randomImageSource>randomImageSource2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}


//Player 2 Wins
else if (randomImageSource<randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
