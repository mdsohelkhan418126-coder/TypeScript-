"use strict";
// setter
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    _name;
    __age;
    _email;
    constructor(name, age, email) {
        this._name = name;
        this.__age = age;
        this._email = email;
    }
    get _age() {
        return this.__age;
    }
    set _age(value) {
        if (value < 0 || value > 100) {
            throw new Error('Age is Not Vaild');
        }
        this.__age = value;
    }
}
const user = new Profile("sohel", 20, 'sohel@gmail.com');
console.log((user._age = 21));
//# sourceMappingURL=GetterSetter.js.map