// DOM elements
const input = document.getElementById('input');

const guessesLeft = document.getElementById('guesses-left');
const highLow = document.getElementById('highLow');

export function compareNumbers(guess, correctNumber) {
    correctNumber = Math.floor(Math.random() * 10);
    