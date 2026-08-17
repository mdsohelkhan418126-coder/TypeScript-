"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// classes oop
class Person {
    name;
    age;
    constructor() {
        ((this.name = 'sohel'), (this.age = 20));
    }
    greet() {
        console.log(`this name ${this.name}`);
    }
}
const user = new Person();
((user.name = 'sohel'), (user.age = 43));
user.greet();
console.log(user);
const user2 = new Person();
((user.name = 'rana'), (user.age = 23));
user.greet();
console.log(user2);
//# sourceMappingURL=OOP.js.map