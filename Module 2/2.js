'use strict';

let participants_no = +prompt("Enter the number of participants: ");
participants_no = parseInt(participants_no);

const target = document.getElementById('target');
const name_list = [];

for (let i = 1; i <= participants_no; i += 1) {
    let name = prompt(`Enter the name of participant ${i}: `)
    name_list.push(name);
}
const sorted_name_list = name_list.sort();

 sorted_name_list.forEach(item => {
     const li = document.createElement('li');
     li.innerText = item;
     target.appendChild(li);
 });



