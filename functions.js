"use strict";
// function addNumbers(x: number, y: number): number {
//     return x + y;
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addNumbers = (x, y) => x + y;
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
console.log(greet('John')); // Output: Hello, John!
console.log(greet('Sarah', 'Welcome')); // Output: Welcome, Sarah!
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
// Higher-order functions
console.log('Higher-order functions: ');
function applyOperation(x, y, operation) {
    return operation(x, y);
}
function multiply2number(a, b) {
    return a * b;
}
const result1 = applyOperation(2, 3, (a, b) => a + b); // result1 = 5
const result2 = applyOperation(2, 3, multiply2number); // result2 = 6
console.log('(a, b) => a + b) :' + result1);
console.log('multiply2number : ' + result2);
// Generics in functions
console.log('Generics in functions: ');
function getFirst(array) {
    return array.length > 0 ? array[0] : undefined;
}
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // firstNumber: number
console.log('firstNumber: ' + firstNumber);
const strings = ['hello', 'world'];
const firstString = getFirst(strings); // firstString: string
console.log('firstString: ' + firstString);
function sort(array, compareFn) {
    return array.sort(compareFn);
}
const numbers_array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sort(numbers_array, (a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
const strings_array = ['cherry', 'date', 'apple', 'banana',];
const sortedStrings = sort(strings_array, (a, b) => a.localeCompare(b));
console.log(sortedStrings); // Output: ['apple', 'banana', 'cherry', 'date']
const node_fetch_1 = __importDefault(require("node-fetch"));
async function fetchData(url) {
    const response = await (0, node_fetch_1.default)(url);
    const data = await response.text();
    return data;
}
fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));
