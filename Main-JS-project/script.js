function computerPlay() {
    let plays = {
      rock: 'Rock',
      paper: 'Paper',
      scissors: 'Scissors'
    };
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
      return plays.rock;
    } else if (randomNum === 2) {
      return plays.paper;
    } else {
      return plays.scissors;
    }
  }
    
  
  function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;
  
    switch (player) {
      case 'rock':
        switch (computer) {
          case 'rock':
            result = 'Its a tie';
            break;
          case 'paper':
            result = 'You lose! Paper beats Rock.';
            break;
          case 'scissors':
            result = 'You win! Rock beats Scissors.';
            break;
          default:
            result = 'Invalid input! Please enter Rock, Paper, or Scissors.';
            break;
        }
        break;
      case 'paper':
        switch (computer) {
          case 'rock':
            result = 'You win! Paper beats Rock.';
            break;
          case 'paper':
            result = 'Its a tie';
            break;
          case 'scissors':
            result = 'You lose! Scissors beats Paper.';
            break;
          default:
            result = 'Invalid input! Please enter Rock, Paper, or Scissors.';
            break;
        }
        break;
      case 'scissors':
        switch (computer) {
          case 'rock':
            result = 'You lose! Rock beats Scissors.';
            break;
          case 'paper':
            result = 'You win! Scissors beats Paper.';
            break;
          case 'scissors':
            result = 'Its a tie';
            break;
          default:
            result = 'Invalid input! Please enter Rock, Paper, or Scissors.';
            break;
        }
        break;
      default:
        result = 'Invalid input! Please enter Rock, Paper, or Scissors.';
        break;
    }
  
    return result;
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
       let playerSelection = prompt("Round " + i + ": Enter Rock, Paper, or Scissors").trim();
       let computerSelection = computerPlay();
  
      console.log("You played " + playerSelection + ". Computer played " + computerSelection + ".");
      
      console.log(playRound(playerSelection, computerSelection));
    
      if (playRound(playerSelection, computerSelection).includes('win')) {
        playerScore++;
      } else if (playRound(playerSelection, computerSelection).includes('lose')) {
        computerScore++;
      }
    }
  
    console.log("Final score - You: " + playerScore + " Computer: " + computerScore);
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is tied!");
    }
  }
  
  game();
