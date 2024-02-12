console.log("\nChallenge 3 Start:\n\n");

function numToArray(num) {
  numString = num.toString();
  numArray = [];

  for (let i of numString) {
    numArray.push(Number(i));
  }

  return numArray;
}

console.log(numToArray(12345));
