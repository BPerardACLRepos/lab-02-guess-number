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
let remainingGuess = 4;

startGameButt.addEventListener('click', () => {
    startGameButt.classList.add('hidden');
    userOutcome.classList.add('hidden');
    gameControl.classList.remove('hidden');
});