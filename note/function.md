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

