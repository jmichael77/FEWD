// paper beats rock

// scissor beats paper

// rock beats scissor

function computerChoice() {
  var resultOptions = ["player", "computer"]
  var randomNumber = Math.floor(Math.random() * 3);
  return computerChoice = options[randomNumber];
}

function showResult(winner) {
  if (winner === -1) {
    alert("It's a draw!");
  } else {
    alert(resultOptions[winner] + " wins!");
  }
}

var options = ["rock", "paper", "scissors"];

var userNewGame = prompt("Do you want to play agian? (Y/N)");

while(userNewGame === "Y") {

  var computer = computerChoice();

  var winner = -1;

  var userChoice = prompt("choose rock, paper, scissors?");

  switch(computer) {
    case "rock":
      if (userChoice.toLowerCase() === "scissors") {
        var winner = 1;
      } else if (userChoice.toLowerCase() === "paper") {
        var winner = 0;
      } 
    break;
  }
  
  switch(computer) {
    case "scissors":
      if (userChoice.toLowerCase() === "paper") {
        var winner = 1;
      } else if (userChoice.toLowerCase() === "rock") {
        var winner = 0;
      }
    break;
  }
  
  switch(computer) {
    case "paper":
      if (userChoice.toLowerCase() === "rock") {
        var winner = 1;
      } else if (userChoice.toLowerCase() === "scissor") {
        var winner = 0;
      }
    break;
  }

  showResult(winner)

  var userNewGame = prompt("Do you want to play agian? (Y/N)");
}