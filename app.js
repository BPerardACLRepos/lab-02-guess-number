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
    userOutcome.classList.remove('hidden');
});

resetGameButt.addEventListener('click', () => {
    userOutcome.classList.add('hidden');
    submitGuessButt.classList.remove('hidden');
    startGame();
});

function runGame() {
    let userGuess = guessInput.valueAsNumber;
    userNotification.classList.remove('error');

    if (userGuess > 0 && userGuess <= 20 && userGuess % 1 === 0) {
        let guessResult = compareNumbers(userGuess, correctNumber);
        if (guessResult === 0) {
            userNotification.textContent = 'Winner';
            userNotification.classList.add('winner');
            submitGuessButt.classList.add('hidden');
            totalWins++;
            totalWinSpan.textContent = `${totalWins}`;
        } else if (guessResult === 1) {
            userNotification.textContent = 'Too high';
        } else {
            userNotification.textContent = 'Too low';
        }
        //remove
        console.log(typeof guesses, guesses);
    } else {
        userNotification.textContent = ('Please guess an integer 1-20')
        userNotification.classList.add('error');
        guessInput.value = '';
        return;
    }
    guesses--;
    guessInput.value = '';
    remainingGuessesSpan.textContent = `${guesses}`;
    if (guesses === 0) {
        userNotification.textContent = 'Not Winner';
        userNotification.classList.add('not-winner');
        submitGuessButt.classList.add('hidden');
        totalLosses++;
        totalLossSpan.textContent = `${totalLosses}`;
    }
}

function startGame() {
    guesses = 4;
    correctNumber = Math.ceil(Math.random() * 20);
    remainingGuessesSpan.textContent = `${guesses}`;
    userNotification.classList.remove('winner');
    userNotification.classList.remove('not-winner');
}