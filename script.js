let playerWeapon;
let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector(".player-choice");
const ComputerChoice = document.querySelector(".computer-choice");
const roundWinner = document.querySelector(".round-winner");
const gameWinner = document.querySelector(".announce");
const playScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const resetDiv = document.querySelector(".reset-button");

const buttons = document.querySelectorAll(".button");

buttons.forEach(button =>
    button.addEventListener("click", playerSelect)
)

function playerSelect(e) {
    playerWeapon = e.target.id;
    game()
    if(playerScore == 5|| computerScore == 5){
    declareWinner()
    }
}

function declareWinner() {
    if (playerScore == 5){
        gameWinner.textContent = "You Win The Game!!!"
        } else if (computerScore == 5){
        gameWinner.textContent = "Computer Win The Game!!!"
    }

    playerScore = 0;
    computerScore = 0;
    playerChoice.remove();
    ComputerChoice.remove();
    roundWinner.remove();
    
    buttons.forEach(button =>
        button.remove()
    )
    
    const resetButton = document.createElement("button")
    const resetText = document.createTextNode("Reset Game")
    resetDiv.append(resetButton)
    resetButton.appendChild(resetText)
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    location.reload()
}

function game() {

    const playerSelection = playerWeapon;
    playerChoice.textContent = playerSelection;

    const computerSelection = getComputerChoice();
    ComputerChoice.textContent = computerSelection;

    roundWinner.textContent = playRound(playerSelection, computerSelection);

    playScore.textContent = playerScore;

    compScore.textContent = computerScore;

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




