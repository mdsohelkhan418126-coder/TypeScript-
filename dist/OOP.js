"use strict";
// classes oop
// class Person {
//   name: string;
//   age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor() {
//     ((this.name = 'sohel'), (this.age = 20));
//   }
//   greet() {
//     console.log(`this name ${this.name}`);
//   }
// }
// const user = new Person();
// ((user.name = 'sohel'), (user.age = 43));
// user.greet();
// console.log(user);
// const user2 = new Person();
// ((user.name = 'rana'), (user.age = 23));
// user.greet();
// console.log(user2);
// constructor
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    add() {
        console.log(`hi ${this.name} she is age ${this.age}`);
    }
}
const user = new Student('sohel', 34);
user.add();
const user2 = new Student('Rana', 22);
console.log(user2.name);
// bank account
class BankAccount {
    accountName;
    balance;
    AccountType;
    constructor(name, amount) {
        this.accountName = name;
        this.balance = amount;
        this.AccountType = "Savings";
    }
    showBalance() {
        console.log(` hi balance is ${this.balance}`);
    }
}
const account = new BankAccount('sohel mia', 1000);
account.showBalance();
//# sourceMappingURL=OOP.js.map