import { compareNumbers } from './utils.js';

//input
const guessInput = document.querySelector('#guess-input');
//buttons
const startGameButt = document.querySelector('#start-game');
const resetGameButt = document.querySelector('#reset-game');
const submitGuessButt = document.querySelector('#submit-guess');
//spans
const remainingGuessesSpan = document.querySelector('#remaining-guesses');
const totalWinSpan = document.querySelector('#total-wins');
const totalLossSpan = document.querySelector('#total-losses');
//div
const gameControl = document.querySelector('#game-controls');
const userOutcome = document.querySelector('#user-outcome');

const userNotification = document.querySelector('#user-notification');

// Initial State
let totalWins = 0;
let totalLosses = 0;
let guesses;
let correctNumber;

startGameButt.addEventListener('click', () => {
    startGameButt.classList.add('hidden');
    userOutcome.classList.add('hidden');
    gameControl.classList.remove('hidden');
    startGame();
});

submitGuessButt.addEventListener('click', () => {
    runGame();
});

resetGameButt.addEventListener('click', () => {
    userOutcome.classList.add('hidden');
    submitGuessButt.classList.remove('hidden');
    startGame();
});

function runGame() {
    const userGuess = guessInput.valueAsNumber;
    console.log(guesses);

    if (userGuess > 0 && userGuess <= 20 && userGuess % 1 === 0) {
        let guessResult = compareNumbers(userGuess, correctNumber);

        if (guessResult === 0) {
            userOutcome.classList.remove('hidden');
            userNotification.textContent = 'Winner';
            submitGuessButt.classList.add('hidden');
        } else if (guessResult === 1) {
            userOutcome.classList.remove('hidden');
            userNotification.textContent = 'Too high';
        } else {
            userOutcome.classList.remove('hidden');
            userNotification.textContent = 'Too low';
        }


        console.log(typeof guesses, guesses);

    } else {
        console.log('Please guess an integer 1-20');
        return;
    }
    guesses--;
    remainingGuessesSpan.textContent = `${guesses}`;
}

function startGame() {
    guesses = 4;
    correctNumber = Math.ceil(Math.random() * 20);
    remainingGuessesSpan.textContent = `${guesses}`;
}