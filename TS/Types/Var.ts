let a: string = "Hello";
a = "Bye";
// a = 100; =>throws an error
a.toUpperCase();

const b: number = 100;
b + 1;

let c: boolean = true;
c = false;

let d = 10; //--inference
// d = "fill";

let e: any = "hehe";
e = 100;
e = false;
e();
