//Using buttons to select player
const buttons = document.querySelectorAll(".button");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>
    button.addEventListener("click", playerSelect)
)

function playerSelect(e) {
    playerWeapon = e.target.id;
    game()
    
}

let playerWeapon;

function game() {

    const playerSelection = playerWeapon;
    const playerChoice = document.querySelector(".player-choice");
    playerChoice.textContent = playerSelection;

    const computerSelection = getComputerChoice();
    const ComputerChoice = document.querySelector(".computer-choice")
    ComputerChoice.textContent = computerSelection;

    const roundWinner = document.querySelector(".round-winner")
    roundWinner.textContent = playRound(playerSelection, computerSelection);

    console.log(playerScore);
    console.log(computerScore);
}

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
    const buttons = document.querySelectorAll(".button");

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




