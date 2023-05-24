
// function addNumbers(x: number, y: number): number {
//     return x + y;
// }

const addNumbers = (x: number, y: number): number => x + y

function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

console.log(greet('John')); // Output: Hello, John!
console.log(greet('Sarah', 'Welcome')); // Output: Welcome, Sarah!

// Function overloading
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value * 2;
  }
}

console.log(processValue(6));
console.log(processValue('Hello Tom!!! in uppercase'));

// Higher-order functions
console.log('Higher-order functions: ')
function applyOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
  return operation(x, y);
}

function multiply2number(a: number, b: number) : number {
    return a*b;
}
const result1 = applyOperation(2, 3, (a, b) => a + b); // result1 = 5
const result2 = applyOperation(2, 3, multiply2number); // result2 = 6

console.log('(a, b) => a + b) :' + result1);
console.log('multiply2number : ' + result2);

// Generics in functions
console.log('Generics in functions: ')
function getFirst<T>(array: T[]): T | undefined {
return array.length > 0 ? array[0] : undefined;
}

const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // firstNumber: number
console.log('firstNumber: ' + firstNumber)

const strings = ['hello', 'world'];
const firstString = getFirst(strings); // firstString: string
console.log('firstString: ' + firstString)

function sort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
    return array.sort(compareFn);
}

const numbers_array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sort(numbers_array, (a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const strings_array = ['cherry', 'date', 'apple', 'banana', ];
const sortedStrings = sort(strings_array, (a, b) => a.localeCompare(b));
console.log(sortedStrings); // Output: ['apple', 'banana', 'cherry', 'date']
