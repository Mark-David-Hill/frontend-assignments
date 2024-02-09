console.log("\nChallenge 4 Start:\n\n");

function alphabetize(string) {
  lowerString = string.toLowerCase();
  charArray = lowerString.split("");
  sortedArray = charArray.sort();
  newString = sortedArray.join("");
  return newString;
}

const testSortString = "Hi there";
newString = alphabetize(testSortString);
console.log(newString);

function alphabetizePlus(string) {
  charArray = string.split("");
  sortedArray = charArray.sort((a, b) => a.localeCompare(b));
  newString = sortedArray.join("");
  return newString;
}

console.log(alphabetizePlus(testSortString));
