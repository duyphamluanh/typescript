"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SavingsAccount_interestRate;
class OfficePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new OfficePerson('John', 30);
person.sayHello();
class Employee extends OfficePerson {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I work as a ${this.jobTitle}.`);
    }
}
const employee = new Employee('Jane', 25, 'Software Engineer');
employee.sayHello();
employee.introduce();
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
class SavingsAccount extends BankAccount {
    constructor(initialBalance, interestRate) {
        super(initialBalance);
        _SavingsAccount_interestRate.set(this, void 0);
        __classPrivateFieldSet(this, _SavingsAccount_interestRate, interestRate, "f");
    }
    addInterest() {
        const interest = this.getBalance() * __classPrivateFieldGet(this, _SavingsAccount_interestRate, "f");
        this.deposit(interest);
    }
}
_SavingsAccount_interestRate = new WeakMap();
let bankAccount = new BankAccount(100000000);
console.log("Balance: " + bankAccount.balance);
let savingsAccount = new SavingsAccount(bankAccount.balance, 0.05);
savingsAccount.addInterest();
console.log("Balance + interest {}: " + savingsAccount.balance);
savingsAccount.addInterest();
console.log("Balance + interest: " + savingsAccount.balance);
//# sourceMappingURL=classes.js.map