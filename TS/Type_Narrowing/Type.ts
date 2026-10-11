// function mulThree(val: number | string): number | string {
//   if (typeof val === "string") {
//     return val.repeat(3);
//   }
//   return val * 3;
// }
// console.log(mulThree(23));
// console.log(mulThree("Three"));

// -----------------------------------------

// function compute(ele: number | null) {
//   if (ele) {
//     return ele + 10;
//   }
//   return `Enter a value`;
// }
// console.log(compute(null));

// --------------------------------------------

// function combine(x: string | null, y: string | number) {
//   if (x === y) {
//     return x.concat(y);
//   }
// }
// console.log(combine("Hi", "Hi"));

// --------------------------------------------

// interface pEmployee {
//   Name: string;
//   Salary: number;
// }
// interface cEmployee {
//   Name: string;
//   wh: number;
//   pph: number;
//   wd: number;
// }
// function Work(employee: pEmployee | cEmployee) {
//   if ("wh" in employee) {
//     return employee.wh * employee.pph * employee.wd;
//   }
//   return employee.Salary;
// }
// console.log(Work({ Name: "Riya", Salary: 75000 }));
// console.log(Work({ Name: "Rohan", wh: 9, pph: 300, wd: 20 }));

// -----------------------------------------------

// function printDate(date: string | Date) {
//   if (date instanceof Date) {
//     console.log(date.toLocaleDateString());
//   } else {
//     console.log(new Date(date).toLocaleDateString());
//   }
// }
// printDate("1/10/2026");
// printDate(new Date());

// -----------------------------------------------

// class myName {
//   constructor(public name: string) {
//     this.name = name;
//   }
// }
// class user {
//   constructor(public userName: string) {
//     this.userName = userName;
//   }
// }
// function callMe(content: myName | user) {
//   if (content instanceof myName) {
//     console.log(content.name);
//   } else {
//     console.log(content.userName);
//   }
// }
// console.log(new myName("Rohith"));
// console.log(new user("Roh@123"));

// -------------------------------------------

// interface bike {
//   Company: string;
//   Model: string;
// }
// interface car {
//   Company: string;
//   Series: string;
// }
// function getVehicle(veh: bike | car): veh is bike {
//   return (veh as bike).Model !== undefined;
// }
// function getIt(veh: bike | car): string {
//   if (getVehicle(veh)) {
//     // veh;
//     return "Mybike";
//   }
//   return "Mycar";
// }
// console.log(getIt({ Company: "Honda", Model: "CB350" }));

// ---------------------------------------------

interface bike {
  Company: string;
  Model: string;
  kind: "Mybike";
}
interface car {
  Company: string;
  Model: string;
  kind: "Mycar";
}
interface truck {
  Company: string;
  Model: string;
  kind: "Mytruck";
}

type Vehicle = bike | car | truck;

function getVhicle(veh: Vehicle) {
  switch (veh.kind) {
    case "Mybike":
      return "Lets Ride!";
    case "Mycar":
      return "Lets Drive!";
    case "Mytruck":
      return "Lets Roll";
    default:
      const exhaustiveCheck: never = veh;
      return exhaustiveCheck;
  }
}

const MB: bike = {
  Company: "RE",
  Model: "Himalayan",
  kind: "Mybike",
};

console.log(getVhicle(MB));
