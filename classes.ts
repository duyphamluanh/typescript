class OfficePerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new OfficePerson('John', 30);
person.sayHello(); // logs "Hello, my name is John and I am 30 years old."

class Employee extends OfficePerson {
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I work as a ${this.jobTitle}.`);
    }
}

const employee = new Employee('Jane', 25, 'Software Engineer');
employee.sayHello(); // logs "Hello, my name is Jane and I am 25 years old."
employee.introduce(); // logs "Hi, my name is Jane and I work as a Software Engineer."

class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public deposit(amount: number) {
        this._balance += amount;
    }

    public withdraw(amount: number) {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    protected getBalance(): number {
        return this._balance;
    }

    public get balance(): number {
        return this._balance;
    }
    
      public set balance(value: number) {
        this._balance = value;
    }
}

class SavingsAccount extends BankAccount {
    #interestRate: number; // with # we'll never able to access value from outside the class

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.#interestRate = interestRate;
    }

    public addInterest() {
        const interest = this.getBalance() * this.#interestRate;
        this.deposit(interest);
    }
}

let bankAccount = new BankAccount(100000000);
console.log("Balance: " + bankAccount.balance);
let savingsAccount = new SavingsAccount(bankAccount.balance, 0.05);
savingsAccount.addInterest();
console.log("Balance + interest {}: " + savingsAccount.balance);
savingsAccount.addInterest();
console.log("Balance + interest: " + savingsAccount.balance);

