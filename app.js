import { startGame, runGame } from './game.js';

//buttons
const startGameButt = document.querySelector('#start-game');
const resetGameButt = document.querySelector('#reset-game');
const submitGuessButt = document.querySelector('#submit-guess');
//div
const gameControl = document.querySelector('#game-controls');
const userOutcome = document.querySelector('#user-outcome');


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
    startGame();
});
