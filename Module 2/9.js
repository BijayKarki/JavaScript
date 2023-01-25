'use strict';

function even(array){
    let result = [];
    for (let i = 0; i <= array.length-1; i++) {
        if (array[i] % 2 == 0){
            result.push(array[i]);
        }
    }
    return result;
}


// main program

const numbers = [2,7,4];
console.log("Original array", numbers)
console.log("Even array", even(numbers))
//document.querySelector('#target').innerHTML = concat(names);
