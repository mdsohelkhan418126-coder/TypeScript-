interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
}

// const res: ApiResponse<User> = {
//   success: true,
//   data: { id: 7, name: 'Sohel' },
//   message: 'OK',
// };
// console.log(res);

// function identity<T>(value: T): T {
//   return value;
// }

// const a = console.log(identity<number>(5)); // a: number
// const b = console.log(identity<string>('hello')); // b: string

// function getFirst<T>(arr:T[]): T {
//   return arr[0];
// }
// const a = console.log( getFirst([1, 2, 3]));
//        // T = number → a: number
// const b = getFirst(["a", "b"]);      // T = string → b: string
// const c = getFirst([{ name: "Sohel" }]);// T = {name: string} → c: {name: string}

const calculateArea = (width: number, height: number) => {
  return width + height;
};
console.log(calculateArea(5, 5));
