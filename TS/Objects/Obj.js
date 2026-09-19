"use strict";
// interface Obj {
//   name: string;
//   age: number;
// }
// const obj: Obj = {
//   name: "Jeevan",
//   age: 36,
// };
const arr = ["Mon", "Wed"];
const obj = {
    [arr[0]]: {
        Open: "6:00AM",
        Close: "8:00PM",
    },
    [arr[1]]: {
        Open: "7:00AM",
        Close: "7:00PM",
    },
};
console.log(obj);
