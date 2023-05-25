TypeScript interfaces allow you to define the shape of an object, specifying the names and types of its properties and methods. The primary agenda of TypeScript interfaces is __to provide static type checking and to help catch errors at compile-time rather than at runtime__.
Here are some of the key benefits of using TypeScript interfaces:
- __Type checking__: Interfaces help ensure that objects conform to a particular structure, which can help catch errors early in the development process.
- __Code documentation__: Interfaces can be used to document the expected shape of an object, making it easier for other developers to understand how to work with it.
- __Code reusability__: Interfaces can be used to define common object structures that can be reused throughout your codebase, making it easier to maintain and update your code.
- __Code organization__: Interfaces can be used to group related objects together, making it easier to navigate and understand the structure of your codebase.
Overall, the agenda of TypeScript interfaces is to provide a way to define and enforce a consistent structure for objects in your code, which can help improve code quality, reduce errors, and make your code easier to maintain over time.

1. Interface syntax: To define an interface in TypeScript, you use the interface keyword followed by the name of the interface and its properties
```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello: () => string;
}
// In this example, we've defined an interface called `Person` with four properties: `firstName` and `lastName` of type `string`, `age` of type `number`, and `sayHello` which is a function that takes no arguments and returns a string.
```

2. Optional properties: You can make properties optional in an interface by adding a question mark __?__ after the property name. 
```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}
// In this example, the `age` property is optional, meaning it can be omitted when creating an object that conforms to the `Person` interface.
```

3. Readonly properties: You can make properties read-only in an interface by using the readonly keyword. 
```typescript
interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
}
// In this example, the `id` property is read-only, meaning it cannot be modified onceit has been set.
```

4. Extending interfaces: You can extend an interface from another interface using the extends keyword. This allows you to create new interfaces that inherit properties from existing interfaces. 
```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark: () => void;
}
// In this example, the `Dog` interface extends the `Animal` interface, adding two new properties: `breed` of type `string` and `bark` which is a function that takes no arguments and returns `void`.
```

5. Implementing interfaces: You can implement an interface in a class using the implements keyword. This allows you to enforce that a class conforms to a particular interface.
```typescript
interface Printable {
  print: () => void;
}

class Book implements Printable {
  print() {
    console.log('Printing book...');
  }
}
// In this example, the `Book` class implements the `Printable` interface, which requires that it has a `print` method that takes no arguments and returns `void`.
```
