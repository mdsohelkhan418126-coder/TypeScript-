// classes oop
// class Person {
//   name: string;
//   age: number;

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

// class Student {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   add() {
//     console.log(`hi ${this.name} she is age ${this.age}`);
//   }
// }
// const user = new Student('sohel', 34);
// user.add();
// const user2 = new Student('Rana', 22);
// console.log(user2.name);

// bank account

class BankAccount {
  public accountName: string;
  private _balance: number;
  private _pin: number;
  protected AccountType: string;

  constructor(name: string, amount: number, pin: number) {
    this.accountName = name;
    this._balance = amount;
    this._pin = pin;
    this.AccountType = 'Savings';
  }
  public showBalance(pin:number | string) {
     if (this._pin === pin) {
     return this._balance
     
     }
  return `Pin is wrong`
   }
}
const account = new BankAccount('sohel mia', 1000,123);
 console.log( account.showBalance(123));
  
