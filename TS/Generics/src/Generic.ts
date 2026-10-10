// const arr: Array<number> = [1];

// ---------------------------------------

// const getId = document.querySelector<HTMLInputElement>("#Gen")!;
// getId.value = "Hi";

// ----------------------------------------

// function returnName<T>(name: T): T {
//   return name;
// }

// returnName<string>("Reethu");

// interface type {
//   Name: string;
//   Age: number;
// }

// function getRandomElement<T>(ele: T[]): T {
//   const r: number = Math.floor(Math.random() * ele.length);
//   return ele[r] as T;
// }
// console.log(getRandomElement<number>([1, 2, 3, 4, 5]));
// console.log(getRandomElement([{ Name: "Rohan", Age: 55 }]));

// ------------------------------------------

// function getName<T, U>(fName: T, Name: U) {
//   return {
//     ...fName,
//     ...Name,
//   };
// }
// const n = getName({ familyName: "Roy" }, { fN: "Rohith", lN: "Singh" });
// console.log(n);

// --------------------------------------------------

// function getName<T extends object, U extends object>(fName: T, Name: U) {
//   return {
//     ...fName,
//     ...Name,
//   };
// }

// const n = getName({ Name: "Helo" }, { Age: 44 });

interface long {
  length: number;
}
function printLength<T extends long>(item: T): number {
  return item.length;
}

console.log(printLength("Hello"));

// ---------------------------------------------

// function createNumber<T = string>(): T[] {
//   return [];
// }
// const cr = createNumber();
// cr.push("add");

// -----------------------------------------------

interface car {
  Name: string;
  Model: string;
}
interface bike {
  Company: string;
  Price: number;
}
class List<T> {
  public list: T[] = [];
  getVehicle(v: T) {
    return this.list.push(v);
  }
}
const veh = new List<car>();
veh.getVehicle({ Name: "BMW", Model: "I8" });

console.log(veh);
