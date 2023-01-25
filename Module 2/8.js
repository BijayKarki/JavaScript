'use strict';

function concat(array){
    let result = "";
    for (let i = 0; i <= array.length-1; i++) {
        result += array[i];
    }
    return result;
}


// main program

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
console.log(concat(names))
document.querySelector('#target').innerHTML = concat(names);
