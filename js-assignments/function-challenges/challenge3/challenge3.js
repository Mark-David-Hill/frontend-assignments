console.log("\nChallenge 3 Start:\n\n");

function getSum(numArray) {
  let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
}

const testArray = [1, 2, 3];
console.log(getSum(testArray));

const userNums = [];
const userNum1 = Number(
  prompt("Challenge 3: Getting the sum. Please Enter a number")
);
userNums.push(userNum1);
const userNum2 = Number(prompt("Please Enter another number"));
userNums.push(userNum2);
const userNum3 = Number(prompt("Please Enter one more number"));
userNums.push(userNum3);

const userSum = getSum(userNums);
prompt(`The sum of the numbers is ${userSum}`);
