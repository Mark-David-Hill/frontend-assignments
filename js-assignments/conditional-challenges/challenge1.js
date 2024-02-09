console.log("Challenge 1 Start:\n\n");

const person = { id: 1, name: "Mark" };
const details = { address: "123 fake st", age: 34 };
const objFinal = { ...person, ...details };
console.log(objFinal);
