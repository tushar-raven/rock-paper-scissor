function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);

    if(randomNum === 0){
        return "rock"
    } else if(randomNum === 1){
        return "paper"
    } else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        return "The result is a tie!"
    } else {
        if(computerSelection == "rock"){
            if(playerSelection == "scissors") {
                return "You lose! Rock beats Scissors"
            } else {
                return "You won! Paper beats Rock"
            }
        }
        else if(computerSelection == "scissors") {
            if(playerSelection == "paper") {
                return "You lose! Scissors beats Paper"
            } else {
                return "You won! Rock beats Scissors"
            }
        }
        else if(computerSelection == "paper") {
            if(playerSelection == "rock") {
                return "You lose! Paper beats Rock"
            } else {
                return "You won! Scissors beats Paper"
            }
        }
    }
}

function playerSelect() {

    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        console.log(playerChoice)
        return playerChoice

    } else {
        alert ("Only Choose Rock, Paper or Scissors!")
        playerSelect()
    }
}

const computerSelection = getComputerChoice();
const playerSelection = playerSelect();

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));