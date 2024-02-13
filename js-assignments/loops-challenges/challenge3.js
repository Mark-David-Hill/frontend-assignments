console.log("\nChallenge 3 Start:\n\n");

function numToArray(num) {
  numString = num.toString();
  numArray = [];

  for (let num of numString) {
    numArray.push(Number(num));
  }

  return numArray;
}

console.log(numToArray(12345));
