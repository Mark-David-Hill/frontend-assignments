console.log("\nChallenge 8 Start:\n\n");

function extract(array, indices) {
  let newArray = [];
  for (let i of indices) {
    newArray.push(array[i]);
  }
  return newArray;
}

const numberArray = ["1", "b", "c", "d"];
const indicesToExtract = [1, 3];

console.log("['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']");
console.log(extract(numberArray, indicesToExtract));
