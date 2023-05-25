"use strict";
const addNumbers = (x, y) => x + y;
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
console.log(greet('John'));
console.log(greet('Sarah', 'Welcome'));
function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value * 2;
    }
}
console.log(processValue(6));
console.log(processValue('Hello Tom!!! in uppercase'));
console.log('Higher-order functions: ');
function applyOperation(x, y, operation) {
    return operation(x, y);
}
function multiply2number(a, b) {
    return a * b;
}
const result1 = applyOperation(2, 3, (a, b) => a + b);
const result2 = applyOperation(2, 3, multiply2number);
console.log('(a, b) => a + b) :' + result1);
console.log('multiply2number : ' + result2);
console.log('Generics in functions: ');
function getFirst(array) {
    return array.length > 0 ? array[0] : undefined;
}
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers);
console.log('firstNumber: ' + firstNumber);
const strings = ['hello', 'world'];
const firstString = getFirst(strings);
console.log('firstString: ' + firstString);
function sort(array, compareFn) {
    return array.sort(compareFn);
}
const numbers_array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sort(numbers_array, (a, b) => a - b);
console.log(sortedNumbers);
const strings_array = ['cherry', 'date', 'apple', 'banana',];
const sortedStrings = sort(strings_array, (a, b) => a.localeCompare(b));
console.log(sortedStrings);
//# sourceMappingURL=functions.js.map