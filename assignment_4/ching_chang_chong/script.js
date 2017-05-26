var choices = ["Rock", "Paper", "Scissors"];

var player = prompt("Rock, Paper or Scissors?");

var computer = choices[Math.floor(Math.random() * 3)];

if (player===computer){
 confirm("It's a tie!");
} else if (player==="Rock" && computer === "Scissors"|| 
    player === "Paper" && computer==="Rock"||
    player==="Scissors"&&computer==="Paper") 
{
 confirm("You've won!");
} else {
 confirm("You've lost!");
}