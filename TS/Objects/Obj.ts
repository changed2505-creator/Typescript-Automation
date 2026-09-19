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

// type Movie = {
//   readonly title: string;
//   originalTitle?: string;
//   director: string;
//   releaseYear: number;
//   boxOffice: {
//     budget: number;
//     grossUS: number;
//     grossWorldwide: number;
//   };
// };
// const dune: Movie = {
//   title: "Dune",
//   originalTitle: "Dune Part One",
//   director: "Denis Villeneuve",
//   releaseYear: 2021,
//   boxOffice: {
//     budget: 165000000,
//     grossUS: 108327830,
//     grossWorldwide: 400671789,
//   },
// };
// const cats: Movie = {
//   title: "Cats",
//   director: "Tom Hooper",
//   releaseYear: 2019,
//   boxOffice: {
//     budget: 95000000,
//     grossUS: 27166770,
//     grossWorldwide: 73833348,
//   },
// };
// function getProfit(mov: Movie): number {
//   return mov.boxOffice.grossWorldwide - mov.boxOffice.budget;
// }

// console.log(getProfit(cats));
// console.log(cats["title"]);
// console.log(cats["boxOffice"]["budget"]);
// const key = "grossWorldwide";
// console.log(cats["boxOffice"][key]);

// ---------------------------------------------

// type Obj = {
//   Name: string;
//   birthY: number;
//   gender: string;
//   age?: number;
//   isAlive?: boolean;
//   isMarried: boolean;
//   calcAge: () => number;
//   summary: () => string;
// };
// const obj: Obj = {
//   Name: "Adhi",
//   birthY: 1998,
//   gender: "Male",
//   isMarried: true,
//   calcAge: function () {
//     this.age = 2026 - this.birthY;
//     return this.age;
//   },
//   summary: function () {
//     return `${this.Name} is a ${this.calcAge()}-year old ${this.gender}, and he ${this.isMarried === true ? "is" : "isn't"} married`;
//   },
// };
// console.log(obj.calcAge());
// console.log(obj.summary());

// ------------------------------------------------ Destructuring

// const { Name: n, birthY: y, gender: g, isAlive = [] } = obj; //Default values
// console.log(n, y, g, isAlive);

// type para = {
//   name: string;
//   age: number;
//   country: string;
// };
// type Ob<T> = {
//   a: number;
//   b: number;
//   c: {
//     d: number;
//     e: number;
//   };
//   funObj: (obj: T) => void;
// };
// let a: number = 10;
// let b: number = 20;
// const ob: Ob<para> = {
//   a: 11,
//   b: 22,
//   c: {
//     d: 33,
//     e: 44,
//   },
//   funObj: function ({ name, age, country }) {
//     console.log(name);
//   },
// };
// // ({ a, b } = ob); //Mutating variables
// // console.log(a, b);
// // const {
// //   c: { d, e },
// // } = ob; //Nested Objects
// // console.log(d, e);
// ob.funObj({
//   name: "Rihal",
//   age: 23,
//   country: "India",
// }); //Parameters as Objects

// -----------------------------------Spread

// type Ob = {
//   a: number;
//   b: number;
//   c: {
//     d: number;
//     e: number;
//   };
// };
// const ob: Ob = {
//   a: 11,
//   b: 22,
//   c: {
//     d: 33,
//     e: 44,
//   },
// };
// type extOb = Ob & { city: string };
// const newObj: extOb = { ...ob, city: "Banglore" };

// -------------------------------------Rest

// type Game = {
//   Name: string;
//   teams: number;
//   playersInOne: number;
//   duration: string;
// };
// const game: Game = {
//   Name: "cricket",
//   teams: 2,
//   playersInOne: 16,
//   duration: "3:00 hrs",
// };
// type spread = {
//   Name: string;
//   rest: Omit<Game, "Name">;
// };
// const { Name, ...rest } = game;

// ------------------------------------------------

// type Overs = {
//   overs: number;
// };
// const over: Overs = {
//   overs: 20,
// };
// type Game = {
//   Name: string;
//   teams: number;
//   playersInOne: number;
//   duration: string;
//   over: Overs;
// };
// const game: Game = {
//   Name: "cricket",
//   teams: 2,
//   playersInOne: 16,
//   duration: "3:00 hrs",
//   over,
// };

// type Obj = {
//   Name: string;
//   birthY: number;
//   gender: string;
//   age?: number;
//   isAlive?: boolean;
//   isMarried: boolean;
//   calcAge: () => number;
//   summary: () => string;
// };
// const obj: Obj = {
//   Name: "Adhi",
//   birthY: 1998,
//   gender: "Male",
//   isMarried: true,
//   calcAge() {
//     this.age = 2026 - this.birthY;
//     return this.age;
//   },
//   summary() {
//     return `${this.Name} is a ${this.calcAge()}-year old ${this.gender}, and he ${this.isMarried === true ? "is" : "isn't"} married`;
//   },
// };
// console.log();

// type Arr = [string, string];
// const arr: Arr = ["Mon", "Wed"] as const;
// type Obj = {
//   Mon?: {
//     Open: string;
//     Close: string;
//   };
//   Wed?: {
//     Open: string;
//     Close: string;
//   };
// };
// const obj: Obj = {
//   [arr[0]]: {
//     Open: "6:00AM",
//     Close: "8:00PM",
//   },
//   [arr[1]]: {
//     Open: "7:00AM",
//     Close: "7:00PM",
//   },
// };
// console.log(obj);

// -------------------------------------------Looping

type Obj = {
  a: number;
  b: number;
  c: number;
};
const obj: Obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const [key, value] of Object.entries(obj) as [keyof Obj, number][]) {
  console.log(key, value);
}

for (const key in obj) {
  console.log(key, obj[key as keyof Obj]);
}
