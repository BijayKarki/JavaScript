'use strict';
    let num_1 = prompt('Enter first number.');
    num_1 = parseInt(num_1)
    let num_2 = prompt('Enter second number.');
    num_2 = parseInt(num_2)
    let num_3 = prompt('Enter third number.');
    num_3 = parseInt(num_3)

    const sum = num_1 + num_2 + num_3

    document.querySelector('#target').innerHTML = 'Sum of the given numbers is ' + sum + '.';
