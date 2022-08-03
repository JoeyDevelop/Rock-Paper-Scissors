// Here I created a function to randomly assign rock paper or scissors to the console.
function getComputerChoice() {
let num = Math.floor(Math.random()* 3);
if (num == 0) {
    return "rock";
} else if (num == 1) {
    return "paper";
} else {
    return "scissors"
}
}

// Defined selection for computer and player to use for game.
let lowerCase = prompt ("Choose rock, paper, or scissors").toLowerCase();
let computerSelection = getComputerChoice()

// function created allowing player to input and play against computer.
function playRound (lowerCase, computerSelection) {
    if (lowerCase === computerSelection) {
        return "It's a tie!";
    } else if(lowerCase === 'paper' && computerSelection === 'scissors') {
        return "You lose! The computer chose scissors.";
    } else if(lowerCase === 'scissors' && computerSelection === 'paper') {
        return "You win! The computer chose paper.";
    } else if(lowerCase === 'rock' && computerSelection === 'paper') {
        return "You lose! The computer chose paper.";
    } else if(lowerCase === 'paper' && computerSelection === 'rock') {
        return "You win! The computer chose rock.";
    } else if (lowerCase === 'scissors' && computerSelection === 'rock'){
        return "You lose! The computer chose rock.";
    } else if (lowerCase === 'rock' && computerSelection === 'scissors') {
        return "You win! The computer chose scissors."
    }
}

console.log(playRound(lowerCase, computerSelection))