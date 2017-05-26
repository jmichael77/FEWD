alert("Guess the Color");

var age = "18";
var age = prompt("How old are you?");

if(age < 18) {
confirm("You can not play this game, sorry.");
} else {
confirm("Ok, you're ready to play the game of the year!");

var colorQA = prompt("What color am i thinking of?");
var color = "purple";

if(colorQA === color) {
  confirm("You win! You probably cheated");
} else {
  confirm("You can do better... Refresh the Page and try again!")
}
}