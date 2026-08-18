class Profile {
  private _name: string;
  private __age: number;
  private _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this.__age = age;
    this._email = email;
  }
  get _age(): number {
    return this.__age;
  }
  set _age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error('Age is Not Vaild');
    }
    this.__age = value;
  }
}
class Student extends Profile{
  private _free : number;
constructor( name: string, age: number, email: string, _free: number) {
    super(name, age, email);
    this._free = _free;
  }

}
const user = new Student('sohel', 20, 'sohel@gmail.com', 100);
console.log(user);


// const user = new Profile('sohel', 20, 'sohel@gmail.com');
// console.log((user._age = 21));
