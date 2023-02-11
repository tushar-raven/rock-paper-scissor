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
                computerScore++
                return "You lose! Rock beats Scissors"
            } else {
                playerScore++
                return "You won! Paper beats Rock"
            }
        }
        else if(computerSelection == "scissors") {
            if(playerSelection == "paper") {
                computerScore++
                return "You lose! Scissors beats Paper"
            } else {
                playerScore++
                return "You won! Rock beats Scissors"
            }
        }
        else if(computerSelection == "paper") {
            if(playerSelection == "rock") {
                computerScore++
                return "You lose! Paper beats Rock"
            } else {
                playerScore++
                return "You won! Scissors beats Paper"
            }
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach(button =>
    button.addEventListener("click", playerSelect)
)

function playerSelect(e) {
    playerSelection = e.target.id
    console.log(playerSelection)
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection,computerSelection));

}


