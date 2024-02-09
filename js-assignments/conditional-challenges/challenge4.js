console.log("\nChallenge 4 Start:\n\n");

function alphabetize(string) {
  lowerString = string.toLowerCase();
  charArray = lowerString.split("");
  sortedArray = charArray.sort();
  newString = sortedArray.join("");
  return string.toLowerCase().split("").sort().join("");
}

const testSortString = "Hi there";
newString = alphabetize(testSortString);
console.log(newString);
