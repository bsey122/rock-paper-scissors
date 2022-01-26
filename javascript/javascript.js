function computerPlay(params) { // create function computerPlay that randomly returns 'rock', 'paper', 'scissors'
    const outcome = ['rock','paper','scissors'] // create outcome variable to hold 'rock', 'paper', 'scissors'
    let randomNum = Math.floor(Math.random()*outcome.length);   // create randomNum variable to store random number
    let randomOutcome = outcome[randomNum]; // create randomOutcome variable to use the randomNum to select from outcome
    return randomOutcome;   // return random selection
}
function playRound(playerSelection,computerSelection) { // create function to play a single round
    playerSelection = playerSelection.toLowerCase();  // set playerSelection to lowercase
    const playerWin = `You win! ${playerSelection} beats ${computerSelection}`;  // create string variable to use when user wins
    const computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;  // create string variable to use when computer wins
    const tie = `That was a tie! You both chose ${computerSelection}`;  // create string variable to use when there's a tie
    if (playerSelection === computerSelection) {
        return tie; // return tie if there's a tie
    }   else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWin;  // return playerWin if the user  wins
    }   else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWin;
    }   else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWin;
    }   else {
        return computerWin;  // return computerWin if player doesn't win and there's no tie
    }
}
function game(params) {  // create game function to play 5 rounds
    let playerWinCounter = 0;  // create counter variable for user wins
    let computerWinCounter = 0;  // create counter variable for computer wins
    let result;  // create variable to log the result of each round
    let score;  // create variable to log the score after each round
    const finalPlayerWin = 'You win the game!';  // create string variable to use when user wins the game
    const finalComputerWin = 'Sorry, you lose.';  // create string variable to use when computer wins the game
    const finalTie = 'Wow a tie?'  // create string variable incase there's a tie
    for (let index = 0; index < 5; index++) {  // loop through the game 5 times
        let userChoice = prompt('Rock, Paper, Scissor?');
        result = playRound(userChoice,computerPlay());
        console.log(result);
        if (result.includes('You win!')) {
            playerWinCounter++;  // increase playerWinCounter by 1 if user wins
            score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
        }   else if (result.includes('You lose!')) {
            computerWinCounter++;  // increase computerWinCounter by 1 if computer wins
            score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
        }   else {
            score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
        }
        console.log(score);
    }
    if (playerWinCounter > computerWinCounter) {  // log the overall winner
        console.log(finalPlayerWin);
    } else if (playerWinCounter < computerWinCounter) {
        console.log(finalComputerWin);
    } else {
        console.log(finalTie);
    }
}
console.log(game());