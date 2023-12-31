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

//getComputerChoice generates a random number between 1 and 3.
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

//playRound() plays a round of Rock,Paper,Scissors and determines the outcome.
function playRound(compSelect, playerSelection){
    compSelect = getComputerChoice();
    let result = "";
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (compSelect === 'rock' && playerSelection === 'paper' ||
       compSelect === 'paper' && playerSelection === 'scissors' ||
       compSelect === 'scissors' && playerSelection === 'rock'){
        result = 'Win';
        outputResult = `You Win! ${playerSelection} beats ${compSelect}`;
       } else if (compSelect === playerSelection){
        result = 'Draw';
        outputResult = `You Drew! ${playerSelection} draws with ${compSelect}`;
       } else {
        result = 'Lost';
        outputResult = `You Lost! ${playerSelection} gets beat by ${compSelect}`;
       }
    console.log(outputResult);
    return result;
}

//game() runs the game 5 times checking results and tallying up the result to output.
function game(result, score){
    let resultsList = [];
    score = 0;
    for(let i = 0; i < 5; i++){
        result = playRound();
        if(result === 'Win'){
            resultsList.push('Win');
            ++score;
        } else if(result === 'Lost'){
            resultsList.push('Lose');
            --score;
        } else {
            resultsList.push('Draw');
        }
    }
    console.log(resultsList);
    console.log(`Your score is: ${score}`);
  return score;
}

game();

