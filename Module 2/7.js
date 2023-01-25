'use strict';

function diceRoll(sides){
    const result = Math.floor(Math.random()*sides+1);
    return result;
}

// main program
let result = [];
let score;
let counter = true;
const sides = prompt("Please enter the number of sides on the dice: ")

while (counter){
    score = diceRoll(sides);
    console.log(score)
    if (score != sides){
        result.push(score);
    }
    else{
        counter = false;
    }
}
result.forEach(item => {
     const li = document.createElement('li');
     li.innerText = item;
     target.appendChild(li);
 });
