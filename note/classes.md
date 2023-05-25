# Classes
Classes are a core component of object-oriented programming in TypeScript, and they are used to create objects that encapsulate data and behavior.
In TypeScript, you can define a class using the class keyword, followed by the name of the class.
```typescript
class Person {
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

const person = new Person('John', 30);
person.sayHello(); // logs "Hello, my name is John and I am 30 years old."
```

Classes in TypeScript can also __inherit properties__ and methods from other classes using the __extends__ keyword to create a subclass
```typescript
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I work as a ${this.jobTitle}.`);
  }
}

const employee = new Employee('John', 30, 'Manager');
employee.sayHello(); // logs "Hello, my name is John and I am 30 years old."
employee.introduce();
```

In addition to inheritance, TypeScript classes also support access modifiers such as public, private, and protected. 
These access modifiers control the visibility of properties and methods within and outside of the class.
- __The public__ modifier is the default, and it means that the property or method can be accessed from anywhere. 
- __The private__ modifier restricts access to the property or method to only within the class. 
- __The protected__ modifier restricts access to the property or method to the class and its subclasses.

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  protected getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  public addInterest() {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }
}
```

In TypeScript, you can define private class members using the __#__ symbol, which is known as the private field declaration. This is a new feature introduced in TypeScript 3.8.

```typescript
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
    #interestRate: number; // with # we'll never able to get value from outside the function

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
console.log("Interest: " + savingsAccount.#interestRate); // error: '#interestRate' is private and cannot be accessed from outside the class
```
Using the __#__ symbol to declare private members in TypeScript has a few advantages over using the __private__ access modifier:
- Private fields are truly private: Private fields declared with the # symbol are truly private and cannot be accessed or modified from outside the class, including from subclasses. This provides stronger encapsulation and ensures that private members are not accidentally modified or accessed from external code.
- No naming conflicts: The # symbol allows you to use the same name for private fields and public fields without causing naming conflicts. This can make your code more readable and reduce the risk of naming errors.
- Better performance: Private fields declared with the # symbol are optimized for performance and have a minimal memory footprint. This can be especially important for classes that are used frequently or in performance-critical applications.







