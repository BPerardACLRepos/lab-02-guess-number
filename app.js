//input
const guessInput = document.querySelector('#guess-input');
//buttons
const startGameButt = document.querySelector('#start-game');
const resetGameButt = document.querySelector('#reset-game');
const submitGuessButt = document.querySelector('#submit-guess');
//spans
const remainingGuessSpan = document.querySelector('#remaining-guess');
const totalWinSpan = document.querySelector('#total-wins');
const totalLossSpan = document.querySelector('#total-losses');
//div
const gameControl = document.querySelector('#game-controls');
const userOutcome = document.querySelector('#user-outcome');

const guessQualify = document.querySelector('#guess-qualifier');
const endGameMsg = document.querySelector('#end-game-message');

// Initial State
let totalWins = 0;
let totalLosses = 0;


startGameButt.addEventListener('click', () => {
    startGameButt.classList.add('hidden');
    userOutcome.classList.add('hidden');
    gameControl.classList.remove('hidden');
});

submitGuessButt.addEventListener('click', () => {
    const correctNumber = Math.ceil(Math.random() * 20);
    if (guessInput.valueAsNumber > 0 && guessInput.valueAsNumber <= 20 && guessInput.valueAsNumber % 1 === 0) {
        console.log(correctNumber);
    } else {
        console.log('Please guess an integer 1-20');
    }

})