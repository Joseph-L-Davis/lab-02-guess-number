// DOM elements
const input = document.getElementById('input');

const guessesLeft = document.getElementById('guesses-left');
const highLow = document.getElementById('highLow');

export function compareNumbers(guess, correctNumber) {
    correctNumber = Math.floor(Math.random() * 10);
    let guess = Number(input);
    let guesses = 3;
    if (guess < correctNumber) {
        highLow.textContent = 'Thats too low';
        guesses -= 1;
        guessesLeft.textContent = guesses.value
    } else if (guess > correctNumber) {
        highLow.textContent = 'Thats too high';
        guesses -= 1;
        guessesLeft.textContent = guesses.value;
    } else if (guess === correctNumber) {
        highLow.textContent = 'Nice Guess!';
    } else if (guesses === 0) {
        highLow.textContent = 'GameOver! You ran out of guess!';
    }
}