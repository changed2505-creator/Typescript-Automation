interface num {
  readonly Name: string;
  age?: number;
  Elligible?: (yOrN: boolean) => string | number | undefined; //Elligible():string;
}
const Num: num = {
  Name: "Hi",
  age: 75,
  Elligible: function (yN) {
    return this.age;
  },
  isAlive: true,
};

// ----------------------------------

interface num {
  isAlive: boolean;
}

interface str {
  isStrong: boolean;
}

interface bool extends num, str {
  Salary: number;
}
