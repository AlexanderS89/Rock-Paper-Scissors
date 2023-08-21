// pseudocode**
// create a list of 3 items.
// create a score count = 0
// create a random computer choice between rock, paper or scissors.
// take input from user for their choice.
// check if user choice === computer choice.
// if user choice is correct - log "You win!".
// add 1pt to user score.
// if wrong log "You lose!".
// take 1pt off user score.
// prompt user to go again.
// get new random choice for computer choice.

console.log('connected');
const gameChoices = ["Rock", "Paper", "Scissors"];
let score = 0;
let player

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() *3 +1);
    if (computerSelection === 1) {
        compSelect = "rock";
    } else if (computerSelection === 2) {
        compSelect = "paper";
    } else {
        compSelect = "scissors";
    }
  return compSelect;
}

function playRound(compSelect, playerSelection){
    compSelect = getComputerChoice();
    let result = "";
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (compSelect === 'rock' && playerSelection === 'paper' ||
       compSelect === 'paper' && playerSelection === 'scissors' ||
       compSelect === 'scissors' && playerSelection === 'rock'){
        result = `You Win! ${playerSelection} beats ${compSelect}`;
       } else if (compSelect === playerSelection){
        result = `You Drew! ${playerSelection} draws with ${compSelect}`;
       } else {
        result = `You Lost! ${playerSelection} loses to ${compSelect}`;
       }
    console.log(result);
    return result;
}

playRound();