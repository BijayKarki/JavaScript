'use strict';

let no_of_roll = prompt("Please enter the number of dice rolls? ");
no_of_roll = parseInt(no_of_roll);
let sum = 0;
for (let i = 1; i <= no_of_roll; i += 1) {
    let dice_face = Math.floor(Math.random() * 6) + 1;
    sum += dice_face
}

document.querySelector('#target').innerHTML = 'The dice was rolled for ' + no_of_roll + ' times. And the sum is ' + sum + '.';