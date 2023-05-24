In TypeScript, a function is defined using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a function body enclosed in curly braces. The function name is optional, and the parameter list and function body can be empty if the function doesn't take any arguments or return any value.
```typescript
function addNumbers(x: number, y: number): number {
  return x + y;
}
const sum = addNumbers(2, 3);
console.log(sum); // Output: 5
```
If you don't specify a return type for a function in TypeScript, the compiler will attempt to infer the return type based on the function's implementation.
TypeScript can infer that the return type is number because the function returns the result of adding two number values together.
```typescript
function add(x: number, y: number) {
  return x + y;
}
```
Specify the return type of a function as a union of types in TypeScript
```typescript
function getValue(key: string): string | number | boolean {
  if (key === 'name') {
    return 'John';
  } else if (key === 'age') {
    return 25;
  } else if (key === 'isStudent') {
    return true;
  } else {
    throw new Error('Invalid key');
  }
}
const nameOrAgeOrIsStudent: string | number | boolean = getValue('name');
```
In this example, the __getValue__ function takes a key parameter of type string, and returns a value that can be either a string, a number, or a boolean. The function first checks the value of the key parameter and returns the appropriate value based on the condition. If the key parameter is not one of the expected values, the function throws an error  


__Agenda__  
1. Introduction to functions: What are functions? Why are they important in programming?
Functions are a fundamental building block of any programming language. They allow you to encapsulate a piece of code that performs a specific task, and then reuse that code throughout your program. In TypeScript, functions are defined using the function keyword, followed by the function name, a list of parameters in parentheses, and a function body in curly braces.
2. Function syntax in TypeScript: How to declare functions, function parameters, and return types?
In TypeScript, you can declare functions with typed parameters and return values. For example, you can define a function that takes two parameters of type number and returns a value of type number like this:
```typescript
function addNumbers(x: number, y: number): number {
  return x + y;
}
```
3. What are arrow functions? How are they different from regular functions?
Arrow functions are a shorthand syntax for writing functions in JavaScript and TypeScript. They were introduced in ES6 and are popular for their concise syntax and implicit return statement. Here's an example of an arrow function that adds two numbers:
```typescript
const addNumbers = (x: number, y: number): number => x + y;
```
4. Optional parameters and default values: How to define optional parameters and default values for function parameters?
In TypeScript, you can define optional parameters and default values for function parameters. Optional parameters are denoted by a question mark (?) after the parameter name, and default values are specified using the equals sign (=) after the parameter name. For example:
```typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet('John')); // Output: Hello, John!
console.log(greet('Sarah', 'Welcome')); // Output: Welcome, Sarah!
```
5. Function overloading: What is function overloading? How to use function overloading in TypeScript?
Function overloading is a feature in TypeScript that allows you to define multiple function signatures for the same function name. This can be useful when you want to provide different function implementations for different argument types or numbers.
```typescript
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
```

6. Higher-order functions: What are higher-order functions? How to use them in TypeScript?
__Higher-order functions__: Higher-order functions are functions that take one or more functions as arguments, or return a function as their result. They are a powerful tool for creating reusable and composable code. Here's an example of a higher-order function that takes a function as an argument:
```typescript
function applyOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
  return operation(x, y);
}

const result1 = applyOperation(2, 3, (a, b) => a + b); // result1 = 5
const result2 = applyOperation(2, 3, (a, b) => a * b); // result2 = 6
```

7. Generics in functions: What are generics? How to use generics in functions?  
Generics are a powerful feature in TypeScript that allows you to write functions and data structures that can work with a variety of types. They provide a way to abstract over types and create reusable code. Here's anexample of a generic function that takes an array of values and returns the first element:
```typescript
function getFirst<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // firstNumber: number

const strings = ['hello', 'world'];
const firstString = getFirst(strings); // firstString: string

function sort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return array.sort(compareFn);
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = sort(numbers, (a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const strings = ['apple', 'banana', 'cherry', 'date'];
const sortedStrings = sort(strings, (a, b) => a.localeCompare(b));
console.log(sortedStrings); // Output: ['apple', 'banana', 'cherry', 'date']
```
In this example, we define a generic Stack interface that has methods for pushing, popping, peeking, and getting the size of the stack. We then implement this interface using an array-based stack ArrayStack. We can create a new ArrayStack instance that works with number values, pushsome values onto the stack, and then pop one value off the top of the stack. We can also peek at the top value of the stack and get the current size of the stack.
Overall, generics in functions and interfaces provide a powerful tool for creating reusable and flexible code in TypeScript. They allow you to abstract over types and create code that works with a wide variety of data types, making your code more flexible and easier to maintain.
In this example, the getFirst function is defined with a generic type parameter T, which represents the type of the elements in the array. The function takes an array of type T[] and returns the first element of the array, which is also of type T.

8. Asynchronous functions: What are asynchronous functions? How to use async/await in TypeScript functions?
Asynchronous functions are functions that return a promise or use the async/await syntax to handle asynchronous operations. They are a common pattern in modern web development, where many operations such as fetching data from an API or reading and writing files are asynchronous. Here's an example of an asynchronous function that fetches data from an API:
```typescript 
import fetch from 'node-fetch';
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

9. Advanced function types: How to use function types such as callbacks, function composition, and currying in TypeScript?
TypeScript supports advanced function types such as callbacks, function composition, and currying. Callbacks are functions that are passed as arguments to other functions and are executed at a later time. Function composition is the process of combining two or more functions to create a new function. Currying is the process of transforming a function that takes multiple arguments into a series of functions that each take a single argument. Here's an example of function composition:
```typescript 
function add(x: number, y: number): number {
  return x + y;
}

function double(x: number): number {
  return x * 2;
}

const addAndDouble = (x: number, y: number): number => double(add(x, y));
console.log(addAndDouble(2, 3)); // Output: 10
```
10. Best practices for writing functions: Tips and tricks for writing clean, reusable, and performant functions in TypeScript?
- Keep functions small and focused: Functions should ideally perform a single task and have a clear purpose. This makes them easier to understand, test, and reuse.
- Use descriptive names for functions and parameters: Names should accurately reflect what the function does and what its parameters represent.
- Document functions using JSDoc comments: JSDoc comments provide a way to document the purpose, parameters, and return values of a function, making it easier for other developers to understand and use your code.
- Use type annotations and interfaces to define function signatures: Type annotations and interfaces provide a way to define clear and concise function signatures, making it easier to reason about the code and catch errors early.
- Write test cases for your functions: Writing test cases ensures that your functions work correctly and helps catch bugs before they make it into production.

