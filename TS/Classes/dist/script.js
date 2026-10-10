// class Name {
//   readonly fN: string;
//   readonly lN: string;
//   fName: string = "Roy";
//   public isAlive = true;
//   #age = 20;
//   private age: number = 30;
//   constructor(fN: string, lN: string) {
//     this.fN = fN;
//     this.lN = lN;
//   }
//   private familyName() {
//     return `${this.fName}`;
//   }
// }
// const n = new Name("Steve", "Jobs");
// n.isAlive = false;
// n.fN = "jon";
// n.#age;
// n.age;
// console.log(n.familyName());
// -------------------------------------------------
// class Name {
//   fName: string = "Roy";
//   public readonly isAlive = true;
//   private _age: number = 30;
//   protected _power: string = "Super";
//   constructor(
//     public fN: string,
//     public lN: string,
//   ) {}
//   private familyName() {
//     return `${this.fName}`;
//   }
//   get fullName(): string {
//     return `${this.fN} ${this.lN}`;
//   }
//   set age(newAge: number) {
//     if (newAge < 0) {
//       throw new Error(`Enter correct age!!!`);
//     }
//     this._age = newAge;
//   }
// }
// class superName extends Name {
//   public sName: string = "Superman";
//   modPower() {
//     this._power = "Strength";
//   }
// }
// const n = new Name("Steve", "Jobs");
// console.log(n.fullName);
// n.age = 34;
// console.log(n);
// -----------------------------------------------Inheritance
// interface power {
//   strengths: number;
//   weaknesses: number;
// }
// interface durability extends power {
//   stats(): number;
// }
// class flash implements power {
//   constructor(
//     public strengths: number,
//     public weaknesses: number,
//   ) {}
// }
// class superman implements durability {
//   constructor(
//     public strengths: number,
//     public weaknesses: number,
//   ) {}
//   stats(): number {
//     return this.strengths - this.weaknesses;
//   }
// }
// const fl = new flash(20, 15);
// const su = new superman(50, 1);
// console.log(su.stats());
// --------------------------------------Interfaces
class Family {
    constructor(familyName, power) {
        this.familyName = familyName;
        this.power = power;
    }
}
class family1 extends Family {
    constructor(familyName, power) {
        super(familyName, power);
        this.familyName = familyName;
        this.power = power;
    }
    wealth() {
        return 10000000;
    }
}
const f1 = new family1("Raina", 20);
export {};
