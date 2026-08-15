"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const subtact = (a, b) => a - b;
const muntiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot by throe error');
    }
    return a / b;
};
const power = (base, exponent = 2) => {
    return Math.pow(base, exponent);
};
const calculator = (operation, a, b = 1) => {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtact(a, b);
        case '*':
            return muntiply(a, b);
        case '/':
            return divide(a, b);
        case '^':
            return power(a, b);
        default:
            throw new Error('Invaid error');
    }
};
console.log("Add:", calculator("+", 5, 6));
console.log("subtact:", calculator("-", 5, 6));
console.log("muntiply:", calculator("*", 5, 6));
console.log("divide:", calculator("/", 5, 6));
//# sourceMappingURL=Calculator.js.map