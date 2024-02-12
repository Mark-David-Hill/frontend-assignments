console.log("\nChallenge 4 Start:\n\n");

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

let matrix = [];

for (let i of arrayOne) {
  for (let j of arrayTwo) {
    matrix.push([i, j]);
    matrix.push([j, i]);
  }
}

console.log(matrix);
