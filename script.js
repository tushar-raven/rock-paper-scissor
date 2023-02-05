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

function game() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerSelect();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection))
    }

    console.log(playerScore)
    console.log(computerScore)
    
    if (playerScore > computerScore) {
        console.log("You Won!")
    } else if(playerScore < computerScore) {
        console.log("You Lost!")
    } else {
        console.log("It's A Draw!")
    }

}

let playerScore = 0;
let computerScore = 0;


game()