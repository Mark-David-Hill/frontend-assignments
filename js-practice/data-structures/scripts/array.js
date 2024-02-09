// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Boolean.prototype);

const meatArray = ["beef", "salmon", "bison"];
const vegArray = ["onion", "tomato", "jalapeno"];

meatCopy = meatArray;

meatArray.unshift("chicken");

console.log(meatArray);
console.log(meatCopy);
