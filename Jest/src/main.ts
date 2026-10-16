export function multiply2Num(a: number, b: number): number {
  return a * b;
}
interface NAME {
  Name: string;
  Age: number;
}
export function storeObject(name: string, age: number): NAME {
  return { Name: name, Age: age };
}
export function fetchData(): Promise<string> {
  return new Promise((res, rej) => {
    const ran = Math.floor(Math.random() * 10 + 1);
    if (ran < 5) {
      rej(`I got rejected`);
    } else {
      setTimeout(() => {
        res(`I got resolved`);
      }, 1000);
    }
  });
}

export function forEach<T>(vals: T[], call: (val: T) => void): void {
  for (const val of vals) {
    call(val);
  }
}

interface OBJ {
  run(): string;
}
export const Obj: OBJ = {
  run() {
    return "Running!!!";
  },
};
