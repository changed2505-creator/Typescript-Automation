// const arr: number[] = [1, 2, 3, 4, 5];
// const brr: Array<string> = ["a", "b", "c"];
// const crr: number[] = new Array(1, 2, 3);

// --------------------------------------------Types

// type Bool = {
//   a: boolean;
//   b: boolean;
// };
// const bool: Bool[] = [{ a: true, b: false }];
// bool.push({ a: false, b: true });

// ---------------------------------------declared types

// const arr: number[][] = [[1], [2], [3, 4]];

// --------------------------------------Muiltidimentional

// const ages: Array<number> = [];

// const gameBoard: string[][] = [];

// type Product = {
//   name: string;
//   price: number;
// };
// const product: Product[] = [
//   { name: "coffee mug", price: 11.5 },
//   { name: "Jug", price: 10.5 },
// ];

// function getTotal(pro: Product[]): number {
//   let sum: number = 0;
//   for (const p of pro) {
//     sum += p.price;
//   }
//   return sum;
// }
// console.log(getTotal(product));

// ---------------------------------------Exercises

// const arr: number[] = new Array(1990, 1989, 1995);
// function calcAge(a: number[]): number[] {
//   let brr: number[] = [];
//   for (const e of a) {
//     if (e === 1989) break;
//     brr.push(2026 - e);
//   }
//   return brr;
// }
// console.log(calcAge(arr));

// ------------------------------------Array(Functions),Break and Continue

// let arr: string[] = ["First", "Second", "Third"];
// let [f, s, t] = arr;
// [f, s] = [s, f];
// console.log(f, s);

// const arr: (number | number[])[] = [1, 2, [3, 4]];
// const [a, b, third] = arr;
// let c: number | undefined, d: number | undefined;
// if (Array.isArray(third)) {
//   [c, d] = third;
// }
// console.log(a, b, c, d);

// ------------------------------------------

// let arr: string[] = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2), arr);
// console.log(arr.splice(2), arr); Mutates
// console.log(arr.reverse(), arr); Mutates
// console.log(arr.at(3));
