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
