TypeScript is a __statically typed superset__ of JavaScript that adds optional __static typing__ and other features to JavaScript. It was developed and is maintained by Microsoft.

npm install -g typescript

Static typing là kiểu lập trình khai báo trước kiểu dữ liệu - means that when you write code in TypeScript, you declare the type of each variable, function, or object, making it easier to catch errors and prevent bugs. 
Statically Typed Superset of JavaScript 

You can use methods from Array.prototype on instances of Array in TypeScript code

List of all the methods available on `Array.prototype` in JavaScript:

- `concat`: Returns a new array that combines the contents of the original array with one or more additional arrays or values.  
```typescript
    const array1: number[] = [1, 2, 3];
    const array2: number[] = [4, 5, 6];
    const array3: number[] = [7, 8, 9];

    // Using the concat() method to concatenate multiple arrays
    const combinedArray = array1.concat(array2, array3);

    console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // the concat method does not modify the original arrays, but instead returns a new array containing all the elements from the original arrays in the order they were concatenated.
```
- `copyWithin`: Copies a sequence of elements within the array to the position starting at the specified target index.
```typescript
    const array1 = ['a', 'b', 'c', 'd', 'e'];

    // Copy to index 0 the element at index 3
    console.log(array1.copyWithin(0, 3, 4));
    // Expected output: Array ["d", "b", "c", "d", "e"]

    // Copy to index 1 all elements from index 3 to the end
    console.log(array1.copyWithin(1, 3));
    // Expected output: Array ["d", "d", "e", "d", "e"]

    const myArray = [1, 2, 3, 4, 5];
    // Using the copyWithin() method to copy elements within the array
    myArray.copyWithin(1, 3, 5);
    console.log(myArray); // Output: [1, 4, 5, 4, 5]

    // Note that the copyWithin method modifies the original array in place, and does not return a new array. Also, we're using TypeScript to declare the type of myArray as number[], which indicates that it's an array of numbers.
    // iIt is possible to use the copyWithin method with arrays of objects in TypeScript
```
- `entries`: Returns an iterator over the key-value pairs in the array.
```typescript
    interface Person {
        name: string;
        age: number;
    }

    const people: Person[] = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
    ];

    // Using the entries() method to get an iterator over the key-value pairs in the array
    const iterator = people.entries();

    // Using a for...of loop to iterate over the key-value pairs
    for (const [index, person] of iterator) {
        console.log(`${index}: ${person.name}, ${person.age}`);
    }
    /*
        Output:
        0: Alice, 25
        1: Bob, 30
        2: Charlie, 35
    */
```
- `every`: Tests whether all elements in the array pass the test implemented by the provided function.
```typescript
    const numbers: number[] = [1, 2, 3, 4, 5];

    // Using the every() method to test whether all elements in the array are even
    const allEven = numbers.every(num => num % 2 === 0);

    console.log(allEven); // Output: false

    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // Expected output: true

```
- `fill`: Fills all the elements in the array with a static value.  
```typescript
    const array1 = [1, 2, 3, 4];

    // Fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // Expected output: Array [1, 2, 0, 0]

    // Fill with 5 from position 1
    console.log(array1.fill(5, 1));
    // Expected output: Array [1, 5, 5, 5]

    console.log(array1.fill(6));
    // Expected output: Array [6, 6, 6, 6]
```
- `filter`: Returns a new array containing all elements that pass the test implemented by the provided function.
```typescript
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]

    interface Person {
    name: string;
    age: number;
    }

    const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Eve", age: 45 },
    ];

    // Using the filter() method to filter the array based on a condition
    const filteredPeople = people.filter(person => person.age >= 30);

    console.log(filteredPeople);
    /*
    Output:
    [
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Eve", age: 45 },
    ]
    */
```
- `find`: Returns the first element in the array that satisfies the provided testing function.
- `findIndex`: Returns the index of the first element in the array that satisfies the provided testing function.
- `flat`: Returns a new array with all sub-array elements concatenated recursively up to the specified depth.
- `flatMap`: Returns a new array by applying a function to each element of the original array, then flattening the result into a new array.
- `forEach`: Executes a provided function once for each array element.
- `includes`: Determines whether an array includes a certain value among its elements, returning true or false as appropriate.
- `indexOf`: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- `join`: Joins all elements of an array into a string.
- `keys`: Returns an iterator over the keys in the array.
- `lastIndexOf`: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
- `map`: Returns a new array containing the results of calling a provided function on every element in the array.
- `pop`: Removes the last element from the array and returns that element.
- `push`: Adds one or more elements to the end of the array and returns the new length of the array.
- `reduce`: Applies a function against an accumulator and each element in the array to reduce it to a single value.
- `reduceRight`: Applies a function against an accumulator and each element in the array from right to left to reduce it to a single value.
- `reverse`: Reverses the order of the elements in the array.
- `shift`: Removes the first element from the array and returns that element.
- `slice`: Returns a shallow copy of a portion of an array into a new array object.
- `some`: Tests whether at least one element in the array passes the test implemented by the provided function.
- `sort`: Sorts the elements of an array in place and returns the sorted array.
- `splice`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
- `toLocaleString`: Returns a string representing the array andits elements in a localized format.
- `toString`: Returns a string representing the array and its elements.
- `unshift`: Adds one or more elements to the beginning of the array and returns the new length of the array.
- `values`: Returns an iterator over the values in the array.

Note that some of these methods have been introduced in newer versions of JavaScript and may not be supported in older browsers. Additionally, some of these methods may have behavior that depends on the type of the elements in the array, so it's important to read the documentation carefully when using these methods.



Enum in TypeScript
An enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be accessed using a set of named keys.
```typescript
    enum Fruit {
        Apple, //0
        Banana, //1
        Orange //2
    }
    console.log(Fruit.Apple); // Output: 0
    console.log(Fruit.Banana); // Output: 1
    console.log(Fruit.Orange); // Output: 2
```

```typescript
    enum FruitColor {
      Apple  = 1, 
      Banana = 2,
      Orange = 3,
    }
    console.log(Fruit[0]); // Output: "Apple"
    console.log(Fruit[1]); // Output: "Banana"
    console.log(Fruit[2]); // Output: "Orange"
```
