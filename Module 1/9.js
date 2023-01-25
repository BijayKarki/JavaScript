// src :https://www.programiz.com/javascript/examples/prime-number

'use strict';

let number = prompt("Please enter a positive number: ");
number = parseInt(number);
let isPrime = true;

// if number is equal to 1
if (number === 1) {
    document.querySelector('#target').innerHTML="1 is neither prime nor composite number.";
}

// if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.querySelector('#target').innerHTML=`${number} is a prime number`;
    } else {
        document.querySelector('#target').innerHTML=`${number} is a not prime number`;
    }
}

// if number is less than 1
else {
    document.querySelector('#target').innerHTML="The number is not a prime number.";
}