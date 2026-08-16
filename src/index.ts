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

function add(nam: string): string {
  return `Name${nam}`;
}
console.log(add('sohel'));
// optional

function optional(firsname: string, lastname: string, big?: number): string {
  return `hi ${firsname} the ${lastname} she is big number ${big}`;
}
const optionTotal = optional('sohel', 'khan');

console.log(optionTotal);
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

const arr = (arr1: number, arr2: number): number => arr1 + arr2;

console.log(arr(34, 34));



// type alias and interface

type User = {
  name: string;
  age: number;
  isMarried: boolean;
};

interface UserInterface {
  name: string;
  age: number;
  isMarried: boolean;
}

// merge type alias and interface

interface UserInterface {
  email: string;
  address: string;
}

interface UserInterface {
  phone: number;
}
const user: UserInterface = {
  name: 'sohel',
  age: 22,
  isMarried: false,
  email: 'sohel@example.com',
  address: '123 Main St',
  phone: 1234567890,
};
console.log(user);
