'use strict';

let number = [];
let num;

num = prompt('Enter a number: ');
num = parseInt(num)
number.push(num)

while (num != 0){
    num = prompt('Enter a number: ');
    num = parseInt(num);
    number.push(num);
}
console.log('The given numbers from largest to the smallest order are ' + number.sort(function(a, b){return b-a}))