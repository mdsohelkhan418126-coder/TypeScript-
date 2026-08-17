// // function add(name: string): string {
// //   return `hello ${name}`;
// // }
// // console.log(add('Typescript'));
// // primitive

// // string

// let name: string = 'sohel';
// name = 'rana';
// console.log(name);
// // number

// const age: number = 22;
// console.log(age);
// // boolean
// const isPassed: boolean = true;
// console.log(isPassed);

// // non-primitive
// // arry

// let num: number[] = [34, 56, 74];
// let nam: string[] = ['allice', 'jhon', 'sujon'];
// let main: Array<number> = [4, 5, 2, 7];
// // tuples

// const namArry: [string, number, boolean] = ['sohel', 22, true];
// console.log(namArry[0]);
// // any
// // let number: any = 'hello';
// // number = 59
// // ;
// // unknown
// let value: unknown = 'world';
// if (typeof value == 'string') {
//   console.log(value.toUpperCase());
// }
// // void
// function all(): void {
//   console.log('sohel is the bifg');
// }

// let nam3: undefined;
// console.log(nam3);
// let nam7: null;
// // type inferess
// let country: string = 'bangladesh';
// country = 'balovashi';
// function

// function add(nam: string): string {
//   return `Name${nam}`;
// }
// console.log(add('sohel'));
// // optional

// function optional(firsname: string, lastname: string, big?: number): string {
//   return `hi ${firsname} the ${lastname} she is big number ${big}`;
// }
// const optionTotal = optional('sohel', 'khan');

// console.log(optionTotal);
// defaut
// function defau(nam3: string = 'gust'): string {
//   return ` hello ${nam3}`;
// }
// console.log(defau());
// // return typeof

// function sub(sub1: string): void {
//   console.log('Log', 'she is not return');
// }
// sub('');
// // never

// function notNever(nim: string): never {
//   throw new Error('something is wrong');
// }
// notNever('');
// Arrow function

// const arr = (arr1: number, arr2: number): number => arr1 + arr2;

// console.log(arr(34, 34));

// // type alias and interface

// type User = {
//   name: string;
//   age: number;
//   isMarried: boolean;
// };

// interface UserInterface {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// // merge type alias and interface

// interface UserInterface {
//   email: string;
//   address: string;
// }

// interface UserInterface {
//   phone: number;
// }
// const user: UserInterface = {
//   name: 'sohel',
//   age: 22,
//   isMarried: false,
//   email: 'sohel@example.com',
//   address: '123 Main St',
//   phone: 1234567890,
// };
// console.log(user);
// // Extending interfaces

// interface Animal {
//   name: string;
//   age: number;
// }
// interface Dog extends Animal {
//   breed: string;
// }
// const dog: Dog = {
//   name: 'Buddy',
//   age: 3,
//   breed: 'Golden Retriever'
// };
// console.log(dog);

// // union types and intersection types
// // union types

// type StringOrNumber = string | number;

// function printValue(value: StringOrNumber): void {
//   console.log(value);
// }
// printValue('Hello');
// printValue(42);

// // intersection types

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   employeeId: string;
//   salary: number;
// };

// type Manager = Person & Employee;

// const manager: Manager = {
//   name: 'Alice',
//   age: 30,
//   employeeId: 'EMP001',
//   salary: 75000
// };
// console.log(manager);

// literal types

type Status = 'active' | 'inactive' | 'banned';

const status: Status = 'active';

console.log(status);

// type narrowing

function printId(id: string | number) {
  if (typeof id === 'number') {
    console.log(id.toFixed(0));
  } else {
    console.log(id.toUpperCase());
  }
}
printId('hello');
printId(42);
// type gruard

// type typeof

function display(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
display('hello');
display(3.14159);

// in type guard
type Car = {
  drive: () => void;
};

type Bike = {
  ride: () => void;
};

function operateVehicle(vehicle: Car | Bike) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
const car: Car = {
    drive: () => {
      console.log('Driving a car');
    }
  };


}


