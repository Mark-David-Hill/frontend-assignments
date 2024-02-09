console.log("\nChallenge 2 Start:\n\n");

function largestNum(num1, num2) {
  largeNum = undefined;
  num1 >= num2 ? (largeNum = num1) : (largeNum = num2);
  return largeNum;
}

console.log(largestNum(9, 12));
