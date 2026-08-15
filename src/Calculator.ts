const add = (a: number, b: number): number => a + b;
const subtact = (a: number, b: number): number => a - b;
const muntiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot by throe error');
  }
  return a / b;
};
const power = (base: number, exponent: number = 2): number => {
  return Math.pow(base, exponent);
};
const calculator = (operation: string, a: number, b: number = 1):number => {
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
console.log("Add:" ,calculator("+",5,6));
console.log("subtact:" ,calculator("-",5,6));
console.log("muntiply:" ,calculator("*",5,6));
console.log("divide:" ,calculator("/",5,6));
