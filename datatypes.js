"use strict";
// When implements interface, we should redefine all method in implement interface
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
    learn(subject) {
        console.log(`${this.name} is learning ${subject}`);
    }
}
const alice = new Student("Alice", 16, 10);
alice.study();
alice.learn("Math");
/// Datatypes
// String
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
// Number
let age = 25;
age = 25; // OK
age = 25.5; //OK
let numstr = "25";
console.log(numstr); // string
console.log(parseInt(numstr)); // number
// Boolean
let valid = true;
console.log(valid);
// Array
let emptyList;
emptyList = ['aaa', 'bbb', 'ccc', 'ddd'];
const people = [
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
// Using Reduce
const peopleReduce = [
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
    }
    else {
        return accumulator;
    }
}, 0);
console.log(totalAgeInSF); // Output: 70
/////////
// Enum
////////
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange"; //2
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple); // Output: 0
console.log(Fruit.Banana); // Output: 1
console.log(Fruit.Orange); // Output: 2
var FruitColor;
(function (FruitColor) {
    FruitColor[FruitColor["Apple"] = 1] = "Apple";
    FruitColor[FruitColor["Banana"] = 2] = "Banana";
    FruitColor[FruitColor["Orange"] = 3] = "Orange";
})(FruitColor || (FruitColor = {}));
console.log(FruitColor[0]); // Output: undefined
console.log(FruitColor[1]); // Output: "Apple"
console.log(FruitColor[2]); // Output: "Banana"
console.log(FruitColor[3]); // Output: "Orange"
var FruitName;
(function (FruitName) {
    FruitName["Apple"] = "Apple";
    FruitName["Banana"] = "Banana";
    FruitName["Orange"] = "Orange";
})(FruitName || (FruitName = {}));
//Element implicitly has an 'any' type because expression of type '0' can't be used to index type 'typeof FruitName'.
// Property '0' does not exist on type 'typeof FruitName'.ts(7053)
// console.log(FruitName[0]); // Error
// console.log(FruitName[1]); // Error
// console.log(FruitName[2]); // Error
// Any
let department;
department = 10;
department = '11';
console.log(typeof (department));
function add(a, b) {
    return a + b;
}
const result = add(2, '3');
console.log(result);
