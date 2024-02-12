console.log("\nChallenge 2 Start:\n\n");

function removeByIndex(array, indexes) {
  newArray = [];
  for (let i of indexes) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));
