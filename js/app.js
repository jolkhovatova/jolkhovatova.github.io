'use strict';

let a = Number(prompt('Enter number: ', ''));
let b = Number(prompt('Enter number: ', ''));
if (isNaN(a) && isNaN(b)) {
    alert('a or b is not a number')
} else {

    let operation = prompt('Enter operation: ', '');
    switch (operation){
        case "+":
        alert(a + b);
        break;
        case "-":
            alert(a - b);
            break;
        case "*":
            alert(a * b);
            break;
        case "/":
            alert(a / b);
            break;
        case "%":
            alert(a % b);
            break;
        default:
            alert(a + b);
            break;


    }

}



