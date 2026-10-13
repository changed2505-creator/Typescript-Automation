export function getElement(ele) {
    if (ele.length === 0) {
        throw new Error(`Enter an array with elements!!!`);
    }
    const random = Math.floor(Math.random() * ele.length);
    return ele[random];
}
export const pi = 3.14;
export default class tellMe {
    constructor(tell, me) {
        this.tell = tell;
        this.me = me;
    }
    whyMe() {
        return `${this.tell} ${this.me}`;
    }
}
