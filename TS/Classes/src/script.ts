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
  fName: string = "Roy";
  public readonly isAlive = true;
  private _age: number = 30;

  constructor(
    public fN: string,
    public lN: string,
  ) {}

  private familyName() {
    return `${this.fName}`;
  }

  get fullName(): string {
    return `${this.fN} ${this.lN}`;
  }

  set age(newAge: number) {
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
