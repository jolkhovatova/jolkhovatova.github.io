'use strict';

let a = Number(prompt('Enter a: ', ''));
let b = Number(prompt('Enter b: ', ''));
if (isNaN(a) && isNaN(b)) {
    alert('a or b is not a number')
} else {

    let o = prompt('Enter operation: ', '');

    if (o == '+') {
        alert(a + b);
    } else if (o == '-') {
        alert(a - b);
    } else if (o == '/') {
        alert(a / b);
    } else if (o == '*') {
        alert(a * b);
    } else if (o == '%') {
        alert(a % b);
    } else {
        alert(a + b);
    }

}

let key = 'value2';
switch (key){
    case "value1":
        alert("Hello 1")
        break;
    case "value2":
        alert("Hello 2")
        break;

    default:
        alert("G B")
        break;
}
//document obj model