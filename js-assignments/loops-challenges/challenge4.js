console.log("\nChallenge 4 Start:\n\n");

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

let matrix = [];

for (let itemOne of arrayOne) {
  for (let itemTwo of arrayTwo) {
    matrix.push([itemOne, itemTwo]);
    matrix.push([itemTwo, itemOne]);
  }
}

console.log(matrix);
