// DOM elements
// const input = document.getElementById('input');
// let guesses = 3;



export function compareNumbers(input, correctNumber) {
    if (input > correctNumber) {
        return 'HIGH';
    } else if (input < correctNumber) {
        return 'LOW';
    } else return 'CORRECT';
    
}