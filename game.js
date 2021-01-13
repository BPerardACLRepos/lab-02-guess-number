import { compareNumbers } from './utils.js';

//input
const guessInput = document.querySelector('#guess-input');
//button
const submitGuessButt = document.querySelector('#submit-guess');
//spans
const remainingGuessesSpan = document.querySelector('#remaining-guesses');
const totalWinSpan = document.querySelector('#total-wins');
const totalLossSpan = document.querySelector('#total-losses');

const userNotification = document.querySelector('#user-notification');

// Initial State
let totalWins = 0;
let totalLosses = 0;
let guesses;
let correctNumber;


export function runGame() {
    let userGuess = guessInput.valueAsNumber;
    userNotification.classList.remove('error');
    console.log(userGuess);

    if (userGuess > 0 && userGuess <= 20 && userGuess % 1 === 0) {
        let guessResult = compareNumbers(userGuess, correctNumber);
        if (guessResult === 0) {
            userNotification.textContent = 'Winner';
            userNotification.classList.add('winner');
            submitGuessButt.classList.add('hidden');
            totalWins++;
            totalWinSpan.textContent = `${totalWins}`;
            return;
        } else if (guessResult === 1) {
            userNotification.textContent = 'Too high';
        } else {
            userNotification.textContent = 'Too low';
        }
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

export function startGame() {
    guessInput.value = '';
    guesses = 4;
    correctNumber = Math.ceil(Math.random() * 20);
    console.log(correctNumber);
    remainingGuessesSpan.textContent = `${guesses}`;
    submitGuessButt.classList.remove('hidden');
    userNotification.classList.remove('winner');
    userNotification.classList.remove('not-winner');
}