'use strict';

const dog_name = [];
const no = 6;

for (let i = 1; i <= no; i++) {
    dog_name[i] = prompt(`Enter name of the dog ${i}: `)
}

const sorted_dogs = dog_name.reverse();

sorted_dogs.forEach(item => {
    const ul = document.createElement('ul');
    ul.innerText = item;
    target.appendChild(ul);
});