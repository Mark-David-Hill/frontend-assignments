console.log("\nChallenge 2 Start:\n\n");

function swap(string) {
  firstChar = string.slice(0, 1);
  middleChars = string.substring(1, string.length - 1);
  lastChar = string.slice(-1);
  newString = lastChar + middleChars + firstChar;
  return newString;
}

testString = "ryan";
console.log(swap(testString));
