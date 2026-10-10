// const arr: Array<number> = [1];
function printLength(item) {
    return item.length;
}
console.log(printLength("Hello"));
class List {
    constructor() {
        this.list = [];
    }
    getVehicle(v) {
        return this.list.push(v);
    }
}
const veh = new List();
veh.getVehicle({ Name: "BMW", Model: "I8" });
console.log(veh);
export {};
