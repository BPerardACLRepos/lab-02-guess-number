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

const userNotification = document.querySelector('#user-notification');

// Initial State
let totalWins = 0;
let totalLosses = 0;
let guesses = 4;

startGameButt.addEventListener('click', () => {
    startGameButt.classList.add('hidden');
    userOutcome.classList.add('hidden');
    gameControl.classList.remove('hidden');
});

submitGuessButt.addEventListener('click', () => {
    runGame(guesses);
});

function runGame() {
    const userGuess = guessInput.valueAsNumber;
    console.log(guesses);
    const correctNumber = Math.ceil(Math.random() * 20);
    if (userGuess > 0 && userGuess <= 20 && userGuess % 1 === 0) {
        if (userGuess === correctNumber) {
            console.log('Winner');
        } else if (userGuess > correctNumber) {
            console.log('Too high');
        } else {
            console.log('Too low');
        }

        if ('Winner') {
            console.log('Winner');
        } else if ('Too high') {
            userOutcome.classList.remove('hidden');
            userNotification.textContent = 'Too high';
            console.log('Too high');
        } else {
            userOutcome.classList.remove('hidden');
            userNotification.textContent = 'Too low';
        }


        console.log(typeof guesses, guesses);

    } else {
        console.log('Please guess an integer 1-20');
    }
    guesses--;
    console.log(guesses);
    return guesses;
}