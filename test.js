let str = "1+2/3*4-1";

let numbersInExpression = str.split('+').join(', ').split('-').join(', ').split('*').join(', ').split('/').join(', ').split(', ');

console.log(numbersInExpression);