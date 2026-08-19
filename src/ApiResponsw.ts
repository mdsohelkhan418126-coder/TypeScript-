// genres

// interface Genre <T> {
//   id: number;
//   name: string;
 
//   data: T;
// }

// function logGenre<T extends object>(genre: Genre<T>) {
//   console.log(genre.data);
// }

// eunm

enum GenreType {
  Action,
  Comedy,
  Drama,
  Horror
}
let myGenre: GenreType = GenreType.Action;


console.log(myGenre)

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// const enum

const enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}
console.log(Status.Success);