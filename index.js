var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var image = "images/dice" + randomNumber1 + ".png";
var image1 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", image);
document.querySelector(".img2").setAttribute("src", image1);


function banding(a,b) {
    if( a > b){
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Winner !!!";
    }
    else if( a < b){
        document.getElementsByTagName("h1")[0].innerHTML = "Play 2 Winner !!!!";
    }else if(a===b) {
        document.getElementsByTagName("h1")[0].innerHTML ="draw";
    }
}

banding(randomNumber1,randomNumber2);