"use strict";
// // function add(name: string): string {
// //   return `hello ${name}`;
// // }
// // console.log(add('Typescript'));
// // primitive
Object.defineProperty(exports, "__esModule", { value: true });
const status = 'active';
console.log(status);
// type narrowing
function printId(id) {
    if (typeof id === 'number') {
        console.log(id.toFixed(0));
    }
    else {
        console.log(id.toUpperCase());
    }
}
printId('hello');
printId(42);
// type gruard
// type typeof
function display(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
display('hello');
display(3.14159);
function operateVehicle(vehicle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
    const car = {
        drive: () => {
            console.log('Driving a car');
        }
    };
}
//# sourceMappingURL=index.js.map