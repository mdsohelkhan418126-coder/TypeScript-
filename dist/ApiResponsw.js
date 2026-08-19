"use strict";
// genres
Object.defineProperty(exports, "__esModule", { value: true });
// interface Genre <T> {
//   id: number;
//   name: string;
//   data: T;
// }
// function logGenre<T extends object>(genre: Genre<T>) {
//   console.log(genre.data);
// }
// eunm
var GenreType;
(function (GenreType) {
    GenreType[GenreType["Action"] = 0] = "Action";
    GenreType[GenreType["Comedy"] = 1] = "Comedy";
    GenreType[GenreType["Drama"] = 2] = "Drama";
    GenreType[GenreType["Horror"] = 3] = "Horror";
})(GenreType || (GenreType = {}));
let myGenre = GenreType.Action;
console.log(myGenre);
//# sourceMappingURL=ApiResponsw.js.map