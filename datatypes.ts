"use strict";

interface Person {
    name: string;
    age: number;
    study(): void;
    learn(subject: string): void;
}

// When implements interface, we should redefine all method in implement interface
class Student implements Person {
    constructor(public name: string, public age: number, public grade: number) {}

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }

    learn(subject: string) {
        console.log(`${this.name} is learning ${subject}`)
    }
}

const alice = new Student("Alice", 16, 10);
alice.study();
alice.learn("Math");

/// Datatypes

// String
let lname : string;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);

// Number
let age: number = 25;

age = 25; // OK
age = 25.5; //OK

let numstr = "25";
console.log(numstr); // string
console.log(parseInt(numstr)); // number

// Boolean
let valid: Boolean = true;
console.log(valid);

// Array
let emptyList: Array<string>;
emptyList = ['aaa','bbb','ccc', 'ddd'];

interface PersonEarth {
    name: string;
    age: number;
}

const people: PersonEarth[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Eve", age: 45 },
];
// Using the filter() method to filter the array based on a condition
let filteredPeople = people.filter(person => person.age >= 30);
console.log(filteredPeople);
// Using the find() method to find the first person in the array over the age of 35
const personOver35 = people.find(person => person.age > 35);
console.log(personOver35);

interface PersonReduce {
    name: string;
    age: number;
    city: string;
}

// Using Reduce
const peopleReduce: PersonReduce[] = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "Dave", age: 40, city: "San Francisco" },
    { name: "Eve", age: 45, city: "New York" },
];

// Using the reduce() method to calculate the total age of people in San Francisco
const totalAgeInSF = peopleReduce.reduce((accumulator, person) => {
    if (person.city === "San Francisco") {
        return accumulator + person.age;
    } else {
        return accumulator;
    }
}, 0);

console.log(totalAgeInSF); // Output: 70

/////////
// Enum
////////
enum Fruit {
    Apple, //0
    Banana, //1
    Orange //2
}
console.log(Fruit.Apple); // Output: 0
console.log(Fruit.Banana); // Output: 1
console.log(Fruit.Orange); // Output: 2

enum FruitColor {
    Apple  = 1, 
    Banana = 2,
    Orange = 3,
}
console.log(FruitColor[0]); // Output: undefined
console.log(FruitColor[1]); // Output: "Apple"
console.log(FruitColor[2]); // Output: "Banana"
console.log(FruitColor[3]); // Output: "Orange"

enum FruitName {
    Apple  = "Apple", 
    Banana = "Banana",
    Orange = "Orange",
}
//Element implicitly has an 'any' type because expression of type '0' can't be used to index type 'typeof FruitName'.
// Property '0' does not exist on type 'typeof FruitName'.ts(7053)
// console.log(FruitName[0]); // Error
// console.log(FruitName[1]); // Error
// console.log(FruitName[2]); // Error

