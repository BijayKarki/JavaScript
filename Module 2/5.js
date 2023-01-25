'use strict';

let numbers = [];
let counter = true;

while (counter){
    let input = prompt('Please enter a number: ')
    input = parseInt(input)
    if (numbers.includes(input)){
        alert("The number has been already given!");
        break;
    }
    else{
        numbers.push(input);
    }

}

console.log("The given numbers in ascending order are " + numbers.sort() + '.')


