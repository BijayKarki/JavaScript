'use strict';

let start_year = prompt("Please enter the starting year: ");
start_year = parseInt(start_year);
let end_year = prompt("Please enter the end year: ");
end_year = parseInt(end_year);


const targetElement = document.getElementById('target');
for (let i = start_year; i <=end_year; i +=1) {
    if ((0 === i % 4) && (0 != i % 100) || (0 == i % 400)) {
        let li = document.createElement('li');
        li.textContent = i;
        targetElement.appendChild(li)
    }
}

