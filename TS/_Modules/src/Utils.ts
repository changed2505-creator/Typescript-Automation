export function getElement<T>(ele: T[]): T {
  if (ele.length === 0) {
    throw new Error(`Enter an array with elements!!!`);
  }
  const random = Math.floor(Math.random() * ele.length);
  return ele[random]!;
}

export const pi: number = 3.14;

export default class tellMe {
  constructor(
    public tell: string,
    public me: number,
  ) {}
  whyMe() {
    return `${this.tell} ${this.me}`;
  }
}
