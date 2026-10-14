export type familyName = "Roy" | "Sharma" | "Tripati";

export interface person {
  Name: string;
  Age: number;
  Gender: string;
  Familyname: familyName;
  isAlive: boolean;
}

export function createPerson(
  Name: string,
  Age: number,
  Gender: string,
  Familyname: familyName = "Sharma",
): person {
  return { Name, Age, Gender, Familyname, isAlive: true };
}

export function describeFamily(Person: person): string {
  return `My name is ${Person.Name} and I am ${Person.Age} years old!!!`;
}
