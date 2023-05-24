Tuple is a fixed-length array that contains elements of different types. Tuples allow you to express an array where the type of a fixed number of elements is known, but not necessarily the same.
Tuples in TypeScript are useful when you want to represent a fixed number o values of different types and maintain that __specific order of types__. They can be used to provide more type safety in situations where you need to work with __fixed sets of values with known types__. However, it's important to note that using tuples can sometimes make your code __less readable__, and it's often better to use interfaces or classes to represent structured data.

```typescript
    let myTuple: [string, number];
    let myTuple: [string, number] = ["hello", 123];
```
Tuples in function
```typescript
function printPerson(person: [string, number]) {
  console.log(`Name: ${person[0]}, Age: ${person[1]}`);
}
let personTuple: [string, number] = ["John", 30];
printPerson(personTuple);
```

Tuples can provide more type safety in situations where you need to work with fixed sets of values with known types and maintain the specific order of those types. Here are a few other examples where tuples can be useful:

1. Working with API responses - When you're working with an API that returns a fixed set of values with specific types in a specific order, you can use tuples to represent those values and ensure that your code handles the response correctly.

2. Parsing CSV or other delimited files - When you're parsing a CSV or other delimited file, you can use tuples to represent each row of data in the file, where the types of each element in the tuple correspond to the types of the columns in the file.

3. Representing coordinates or points - When you're working with a system that requires you to represent coordinates or points in a specific order, such as latitude and longitude, you can use tuples to ensure that your code handles the values correctly and maintains the specific order of the values.

4. Representing a pair of related values - When you have a function or method that returns a pair of related values, such as a result and an error message, you can use a tuple to represent those values together and ensure that both values are always returned together.

Overall, tuples can be useful in situations where you need to work with fixed sets of values with known types and maintain the specific order of those types. However, it's important to remember that tuples can sometimes make your code less readable, and it's often better to use interfaces or classes to represent structured data when possible.
```
    let swapnumber : [number, number];
    // Type 'number[]' is not assignable to type '[number, number]'.
    // Target requires 2 element(s) but source may have fewer
    // function swapNumber(number1: number, number2: number) {
    //     return [number2, number1];
    // }
    // --> add : [number, number]
    function swapNumber(number1: number, number2: number) : [number, number]{
        return [number2, number1];
    }
    swapnumber = swapNumber(10,20);
    console.log(swapnumber);
    swapnumber = swapNumber(swapnumber[0], swapnumber[1]);
    console.log(swapnumber);

    function printPerson(person: [string, number]) {
        console.log(`Name: ${person[0]}, Age: ${person[1]}`);
    }
    let personTuple: [string, number] = ["John", 30];
    printPerson(personTuple);
```
