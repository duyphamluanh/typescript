"use strict";
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
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
let age = 25;
age = 25;
age = 25.5;
let numstr = "25";
console.log(numstr);
console.log(parseInt(numstr));
let valid = true;
console.log(valid);
let emptyList;
emptyList = ['aaa', 'bbb', 'ccc', 'ddd'];
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Eve", age: 45 },
];
let filteredPeople = people.filter(person => person.age >= 30);
console.log(filteredPeople);
const personOver35 = people.find(person => person.age > 35);
console.log(personOver35);
const peopleReduce = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "Dave", age: 40, city: "San Francisco" },
    { name: "Eve", age: 45, city: "New York" },
];
const totalAgeInSF = peopleReduce.reduce((accumulator, person) => {
    if (person.city === "San Francisco") {
        return accumulator + person.age;
    }
    else {
        return accumulator;
    }
}, 0);
console.log(totalAgeInSF);
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple);
console.log(Fruit.Banana);
console.log(Fruit.Orange);
var FruitColor;
(function (FruitColor) {
    FruitColor[FruitColor["Apple"] = 1] = "Apple";
    FruitColor[FruitColor["Banana"] = 2] = "Banana";
    FruitColor[FruitColor["Orange"] = 3] = "Orange";
})(FruitColor || (FruitColor = {}));
console.log(FruitColor[0]);
console.log(FruitColor[1]);
console.log(FruitColor[2]);
console.log(FruitColor[3]);
var FruitName;
(function (FruitName) {
    FruitName["Apple"] = "Apple";
    FruitName["Banana"] = "Banana";
    FruitName["Orange"] = "Orange";
})(FruitName || (FruitName = {}));
let department;
department = 10;
department = '11';
console.log(typeof (department));
//# sourceMappingURL=datatypes.js.map