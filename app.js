// import functions and grab DOM elements
// import { compareNumbers } from './utils.js';
// initialize state

// set event listeners to update state and DOM
const correctNumber = Math.floor(Math.random() * 10);
const guess = document.getElementById('input');
const guessesLeft = document.getElementById('guesses-left');
const highLow = document.getElementById('highLow');
let guesses = 3;
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    console.log(guesses);
    console.log('clicked');
    guesses--;
    if (guess < correctNumber) {
        highLow.textContent === 'Thats too low';
        guessesLeft.textContent = Number(guesses).value;
    } else if (guess > correctNumber) {
        highLow.textContent === 'Thats too high';
        guessesLeft.textContent = Number(guesses).value;
    } else if (guess === correctNumber) {
        highLow.textContent === 'Nice Guess!';
    } else if (guesses === 0) {
        highLow.textContent = 'GameOver! You ran out of guess!';
        return;
    }
});