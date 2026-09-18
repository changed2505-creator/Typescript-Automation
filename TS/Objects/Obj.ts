// interface Obj {
//   name: string;
//   age: number;
// }
// const obj: Obj = {
//   name: "Jeevan",
//   age: 36,
// };

// let obj: { name: string; age: number } = {
//   name: "Jeevan",
//   age: 36,
// };

// ---------------------------------------

// function nos(a: number, b: number): { a: number; b: number } {
//   return {
//     a: a,
//     b: b,
//   };
// }

// interface Nos {
//   a: number;
//   b: number;
// }
// function nos(a: number, b: number): Nos {
//   return {
//     a,
//     b,
//   };
// }

// type Nos = {
//   a: number;
//   b: number;
// };
// let num: Nos = {
//   a: 10,
//   b: 20,
// };
// function nos(num: Nos): Nos {
//   return { a: num.a, b: num.b };
// }
// console.log(nos(num));

// --------------------------------------------

// function add(Nos: { a: number; b: number }): number {
//   return Nos.a + Nos.b;
// }
// console.log(add({ a: 10, b: 20 }));

// ------------------------------------------

// function add(Nos: { a: number; b: number }): number {
//   return Nos.a + Nos.b;
// }
// let num = { a: 10, b: 20, c: 50 };
// console.log(add({ a: 10, b: 20, c: 50 })); //excess
// console.log(add(num));

// -----------------------------------

// type Obj = {
//   name: { fName: string; lName: string };
//   age: number;
//   country: string;
// };
// const obj: Obj = {
//   name: { fName: "Aditya", lName: "Birla" },
//   age: 29,
//   country: "India",
// };
// function personData(details: Obj): string {
//   return `${details.name.fName} ${details.name.lName}`;
// }
// console.log(personData(obj));

// ---------------------------------------

// type sum2o3 = {
//   a: number;
//   b: number;
//   c?: number;
// };
// const Sum: sum2o3 = {
//   a: 10,
//   b: 20,
// };
// function sum(s: sum2o3): number {
//   return s.a + s.b;
// }

// --------------------------------------------

// type Obj = {
//   readonly a: number;
//   b: number;
// };
// const obj: Obj = {
//   a: 10,
//   b: 20,
// };
// obj.a = 34; //Readonly---

// --------------------------------------------

// type dad = {
//   familyName: string;
// };
// type son = {
//   name: string;
//   age: number;
// };
// type sonFam = dad &
//   son & {
//     country: string;
//   };
// const fam: sonFam = {
//   familyName: "Takur",
//   name: "Aditya",
//   age: 34,
//   country: "India",
// };

// ------------------------------------Exercises

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};
const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};
const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
function getProfit(mov: Movie): number {
  return mov.boxOffice.grossWorldwide - mov.boxOffice.budget;
}
