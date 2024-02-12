console.log("\nChallenge 3 Start:\n\n");

function getSum(numArray) {
  sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
}

let testArray = [1, 2, 3];
console.log(getSum(testArray));
