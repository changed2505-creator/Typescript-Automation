export function createPerson(Name, Age, Gender, Familyname = "Sharma") {
    return { Name, Age, Gender, Familyname, isAlive: true };
}
export function describeFamily(Person) {
    return `My name is ${Person.Name} and I am ${Person.Age} years old!!!`;
}
