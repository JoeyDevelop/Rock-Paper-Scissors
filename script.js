// function to create computer choice
function computerChoiceSelector() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
      return "paper";
    } else if (num === 1) {
      return "rock";
    } else if (num === 2) {
      return "scissors";
    }
  }
  
  //let computerChoice = computerChoiceSelector();
  
  // create var to equal player choice
  //let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
  
  
  // create function to play a round
  /* function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      return "You win! The computer chose scissors.";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      return "You lose! The computer chose paper.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      return "You win! The computer chose rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      return "You lose! The computer chose scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      return "You win! The computer chose paper";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      return "You lose! The computer chose rock.";
    } else {
      return "Your answer was not a valid answer choice."
    }
  } */
  
  //playRound(playerChoice, computerChoice);
  
  // create function to keep score of rounds, best of 5
  function game() {
      let playerWins = 0;
    let computerWins = 0;
    let roundsPlayed = 0;
    let gameWinner = "";
        // create loop to repeat function
      while (roundsPlayed < 5) {
        roundsPlayed++;
        let computerChoice = computerChoiceSelector();
        let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
        console.log(playRound(playerChoice, computerChoice));
        console.log("Player wins total:" + playerWins);
        console.log("Computer wins total:" + computerWins);
        
        function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerWins++;
      return "You win! The computer chose scissors.";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      computerWins++;
      return "You lose! The computer chose paper.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      playerWins++;
      return "You win! The computer chose rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerWins++;
      return "You lose! The computer chose scissors.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerWins++;
      return "You win! The computer chose paper";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      computerWins++;
      return "You lose! The computer chose rock.";
    } else {
      return "Your answer was not a valid answer choice."
    }
  }  
      }
    if (playerWins > computerWins) {
      gameWinner = "You win!";
    } else if (computerWins > playerWins ) {
      gameWinner = "You lose!";
    } else {
      gameWinner = "You tied!";
    }
    console.log(gameWinner)
  }
  game();