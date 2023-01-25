'use strict';

const button = document.getElementById('start');
button.addEventListener('click',function(){

    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');

    const input1Value = parseInt(input1.value);
    const input2Value = +input2.value;

    if(operation.value === "add"){
        result.innerText = input1Value + input2Value;
        return
    }

    if(operation.value === "sub"){
        result.innerText = input1Value - input2Value;
        return
    }

    if(operation.value === "multi"){
        result.innerText = input1Value * input2Value;
        return
    }

    if(operation.value === "div"){
        result.innerText = input1Value / input2Value;
        return
    }
})
