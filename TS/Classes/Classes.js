class Name {
  static description = `Hi there`;
  isAlive = true; //classfields
  _isindian = true;
  #age = 0;
  constructor(fN, lN) {
    this.fN = fN;
    this.lN = lN;
  }
  static myFun() {
    console.log(`${this.fN} ${this.lN} Hi`);
  }
  set fullName(n) {
    const [fN, lN] = n.split(" ");
    this.fN = fN;
    this.lN = lN;
  }

  #isDead() {
    this.isAlive = false;
  }
  //   ageSet(newAge) {
  //     this.#age = newAge;
  //   }
  set age(newAge) {
    if (newAge < 0) {
      throw new Error(`Enter right age!!!`);
    }
    this.#age = newAge;
  }
  //   ageUpdate() {
  //     return this.#age;
  //   }
  get age() {
    return this.#age;
  }
}
class Family extends Name {
  familyName = "Roy";
  constructor(fN, lN, power) {
    super(fN, lN);
    this.power = power;
  }
}

const n1 = new Name("My", "Name"); //Instance
// n1.myFun();
// console.log(n1.isAlive);
// n1.isDead();
// console.log(n1.isAlive);
// n1.ageUpdate();
// console.log(n1.#age);
// n1.#age = -20;
// console.log(n1.#age);
// console.log(n1);
// n1.ageSet(21);
// console.log(n1.ageUpdate());
// console.log(n1);
// n1.age = 10;
// console.log(n1.age);
// n1.fullName = "Eve Johns";
// console.log(n1);
// console.log(n1.description);
// console.log(Name.description);
// console.log(n1.myFun());
console.log(Name.myFun());
const fN1 = new Family("Levi", "Ackerman", "Invisiblity");
console.log(fN1);

// --------------------------------------------
