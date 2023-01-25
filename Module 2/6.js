'use strict';

function diceRoll(){
    const result = Math.floor(Math.random()*6+1);
    return result;
}

// main program
let result = [];
let score;
let counter = true;

while (counter){
    score = diceRoll();
    console.log(score)
    if (score != 6){
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
