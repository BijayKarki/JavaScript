'use strict';
const ul = document.getElementById('target');
ul.innerHTML = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;

/*const items = ["First", "Second", "Third"]

items.forEach(item =>{
    const li = document.createElement('li');
    li.innerText = item + " item";
    ul.appendChild(li);
})
*/

ul.className = "my-list"