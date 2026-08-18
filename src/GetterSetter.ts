// setter

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
const user = new Profile("sohel", 20, 'sohel@gmail.com')
 console.log((user._age = 21)); 