"use strict";
// function square(num: number) {
//   return num * num;
// }
// function naming(n: string) {
//   return `Hi ${n}`;
// }
// console.log(square(10));
// console.log(naming("Hemanth"));
// const addStringNo = (name: string, salary: number) => {
//   return `${name}:${salary}`;
// };
// console.log(addStringNo("Arjun", 50000));
// function add(a: number, b: number = 10) {
//   return a + b;
// }
// console.log(add(20));
// const sub = (num1: number, num2: number): number | string => {
//   if (num1 - num2 < 0) {
//     return (num1 - num2).toString();
//   }
//   return num1 - num2;
// };
// console.log(sub(2, 10));
// console.log(sub(5, 1));
// let arr = ["hi", "Bye", "Hello"];
// let brr = arr.map((e) => {
//   return e.toUpperCase();
// });
// console.log(brr);
// function returnNothing(n: string): void {
//   console.log(n);
// }
// returnNothing("Harish");
// function neverReturn(msg: string): never {
//   throw new Error(msg);
// }
// function loopsInfinte(num: number): never {
//   while (true) {
//     num + num;
//   }
// }
// ------------------------------------------Exercise
// function twofer(name: string = "you"): string {
//   return `onefor ${name}, one for me`;
// }
// console.log(twofer());
// console.log(twofer("Elton"));
function isLeapyear(year) {
    if (year % 4 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
