'use strict';
    const name = prompt("Please enter your name: ");
    const cabinClass = parseInt(Math.random()*5) ;
    const group = {1:"Gryffindor", 2:"Slytherin", 3:"Hufflepuff", 4:"Ravenclaw"}
        switch (cabinClass) {
            case 1:
                document.querySelector('#target').innerHTML = name + ', you are ' + group[1] + '.';
                break;

            case 2:
                document.querySelector('#target').innerHTML = name + ', you are ' + group[2] + '.';
                break;

            case 3:
                document.querySelector('#target').innerHTML = name + ', you are ' + group[3] + '.';
                break;

            case 4:
                document.querySelector('#target').innerHTML = name + ', you are ' + group[4] + '.';
                break
        }


