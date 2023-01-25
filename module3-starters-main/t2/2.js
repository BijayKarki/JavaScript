'use strict';

const ul = document.getElementById('target');
const items = ["First", "Second", "Third"]

items.forEach(item =>{
    const li = document.createElement('li');
    li.innerText = item + " item";
    ul.appendChild(li);
})