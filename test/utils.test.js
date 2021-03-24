// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('Should return LOW if guess is lower than correctNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'LOW';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(3, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('Should return HIGH if guess is higher than correctNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'HIGH';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(7, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('Should return CORRECT if guess is lower than correctNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'CORRECT';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
