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
class Name {
    constructor(fN, lN) {
        this.fN = fN;
        this.lN = lN;
        this.fName = "Roy";
        this.isAlive = true;
        this._age = 30;
    }
    familyName() {
        return `${this.fName}`;
    }
    get fullName() {
        return `${this.fN} ${this.lN}`;
    }
    set age(newAge) {
        if (newAge < 0) {
            throw new Error(`Enter correct age!!!`);
        }
        this._age = newAge;
    }
}
const n = new Name("Steve", "Jobs");
console.log(n.fullName);
n.age = 34;
console.log(n);
export {};
