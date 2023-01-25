
'use strict';
const answer = confirm ('Should I calculate the square root?');


    if (answer == true) {
        let number = prompt("Enter a number: ");
        number = parseInt(number)
        if (number < 0  ){
            document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined.';
        }
        else {
            document.querySelector('#target').innerHTML = 'The square root of the given number is ' + Math.sqrt(number) + '.';

        }

    } else {
        document.querySelector('#target').innerHTML = 'The function is not available!';
    }