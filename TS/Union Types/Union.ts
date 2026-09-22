// type Fruits = {
//   F1: string;
//   F2: string;
// };
// type Veggies = {
//   V1: string;
//   V2: string;
// };
// let eatables: Fruits | Veggies = {
//   F1: "apple",
//   F2: "banana",
// };
// eatables = {
//   V1: "carrot",
//   V2: "drumstick",
// };

// ---------------------------Union Types

// function bmiCalculator(weight: number | string, height: number) {
//   if (typeof weight === "string") {
//     weight = parseFloat(weight.replace("kg", ""));
//   }
//   return (weight / (height * height)).toFixed(2);
// }
// console.log(bmiCalculator(68, 1.83));

// ---------------------------------Function parameters

// type Fruits = {
//   F1: string;
//   F2: string;
// };
// type Veggies = {
//   V1: string;
//   V2: string;
// };
// const arr: (Fruits | Veggies)[] = [];
// arr.push({
//   F1: "apple",
//   F2: "banana",
// });
// arr.push({
//   V1: "carrot",
//   V2: "drumstick",
// });
// console.log(arr);

//---------------------------------Unions in Arrays

// function mood(moodT: "Happy" | "Sad") {
//   console.log(`Mood type is ${moodT}`);
// }
// mood("Sad");

// ----------------------------------Literal types

// const highScore: number | boolean = 10;

// const stuff: (number | string)[] = [];

// type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// type SkiSchoolStudent = {
//   name: string;
//   age: number;
//   sport: "ski" | "snowboard";
//   level: SkillLevel;
// };

// type RGB = {
//   r: number;
//   g: number;
//   b: number;
// };
// type HSL = {
//   h: number;
//   s: number;
//   l: number;
// };
// const colors: (RGB | HSL)[] = [];

// function greet(greetings: string | string[]): void {
//   if (typeof greetings === "string") {
//     console.log(`Hello, ${greetings}`);
//   } else {
//     greetings.forEach((element) => {
//       console.log(`Hello, ${element}`);
//     });
//   }
// }
// greet("Sneha");
// greet(["Sneha", "Suresh", "Nithin"]);

// ------------------------------Excersises
