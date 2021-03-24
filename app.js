// import functions and grab DOM elements
// import { compareNumbers } from './utils.js';
// initialize state

// set event listeners to update state and DOM


const highLow = document.getElementById('highLow');
let correctNumber = Math.ceil(Math.random() * 10);
let input = document.getElementById('input');
// Buttons
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

let guesses = 3;

submit.addEventListener('click', () => {

    console.log(input.value);
    console.log(correctNumber);
    guesses--;
    if (input.value < correctNumber) {
        highLow.textContent = 'Thats too low';
        alert(`You have ${guesses} left!`);
    } else if (input.value > correctNumber) {
        highLow.textContent = 'Thats too high';
        alert(`You have ${guesses} left!`);
    } else {
        alert('Nice job! Click the reset button to play again!');
        submit.style.display = 'none';
        reset.style.display = 'block';
        highLow.textContent = 'Good Guess';
        return;
    } 
    if (guesses <= 0) {
        highLow.textContent = 'GameOver! You ran out of guess! Click Reset to try again.';
        submit.style.display = 'none';
        reset.style.display = 'block';
        return;
        
    }
});
                                                          

reset.addEventListener('click', () => {
    correctNumber = Math.ceil(Math.random() * 10);
    guesses = 3;
    submit.style.display = 'block';
    reset.style.display = 'none';
    highLow.textContent = '';
    input.value = '';
    
});

