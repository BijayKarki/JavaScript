'use strict';

let numbers = []
numbers[0] = prompt("Enter first number: ")
numbers[1] = prompt("Enter second number: ")
numbers[2] = prompt("Enter third number: ")
numbers[3] = prompt("Enter forth number: ")
numbers[4] = prompt("Enter fifth number: ")

for (let i = numbers.length-1; i >= 0; i -= 1){
    console.log(numbers[i])
}

