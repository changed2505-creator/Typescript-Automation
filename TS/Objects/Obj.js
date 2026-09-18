"use strict";
// interface Obj {
//   name: string;
//   age: number;
// }
// const obj: Obj = {
//   name: "Jeevan",
//   age: 36,
// };
const obj = {
    name: { fName: "Aditya", lName: "Birla" },
    age: 29,
    country: "India",
};
function personData(details) {
    return `${details.name.fName} ${details.name.lName}`;
}
console.log(personData(obj));
