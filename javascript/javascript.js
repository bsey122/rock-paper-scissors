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
function game() {  // create game function to play 5 rounds
    let playerWinCounter = 0;  // create counter variable for user wins
    const playWinContainer = document.querySelector('.player');
    let playerWinDisplay = document.createElement('p');
    const computerWinContainer = document.querySelector('.computer');
    let computerWinDisplay = document.createElement('p');
    let computerWinCounter = 0;  // create counter variable for computer wins
    const container = document.querySelector('.result');
    let result = document.createElement('p');  // create variable to log the result of each round
    let score;  // create variable to log the score after each round
    let finalResult = document.createElement('h2');
    const finalPlayerWin = 'You win the game!';  // create string variable to use when user wins the game
    const finalComputerWin = 'Sorry, you lose.';  // create string variable to use when computer wins the game
    const finalTie = 'Wow a tie?'  // create string variable incase there's a tie
    const buttons = document.querySelectorAll('button');
    const newGameContainer = document.querySelector('.container');
    const newGameButton = document.createElement('button');
    newGameButton.classList.add('play-again-btn');
    newGameButton.textContent = 'Play again';
    const resultBorder = document.querySelector('.results');

    buttons.forEach((button) => {
        button.addEventListener('click', function display(e) {
            result.textContent = playRound(e.target.classList[0], computerPlay());
            if (result.textContent.includes('You win!')) {
                playerWinCounter++;  // increase playerWinCounter by 1 if user wins
                score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
                resultBorder.setAttribute('style', 'border-color: #50723c;');
            }   else if (result.textContent.includes('You lose!')) {
                computerWinCounter++;  // increase computerWinCounter by 1 if computer wins
                score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
                resultBorder.setAttribute('style', 'border-color: #f15152;');
            }   else {
                score = `Player score is ${playerWinCounter} and computer score is ${computerWinCounter}`;
                resultBorder.setAttribute('style', 'border-color: #b79ced;');
            }
            if (playerWinCounter > 4) {  // log the overall winner
                finalResult.textContent = finalPlayerWin;
                buttons.forEach((button) => {
                    button.disabled = true;
                    button.removeEventListener('click', display);
                });
                newGameContainer.appendChild(newGameButton);
                newGameButton.addEventListener('click', function () {
                    window.location.reload();
                })
            } else if (computerWinCounter > 4) {
                finalResult.textContent = finalComputerWin;
                buttons.forEach((button) => {
                    button.disabled = true;
                    button.removeEventListener('click', display);
                });
                newGameContainer.appendChild(newGameButton);
                newGameButton.addEventListener('click', function () {
                    window.location.reload();
                })
            }
            playerWinDisplay.textContent = `Player: ${playerWinCounter}`;
            computerWinDisplay.textContent = `Computer: ${computerWinCounter}`;
        });
    });
    playWinContainer.appendChild(playerWinDisplay);
    computerWinContainer.appendChild(computerWinDisplay);
    container.appendChild(result);
    newGameContainer.appendChild(finalResult);
}
game();
