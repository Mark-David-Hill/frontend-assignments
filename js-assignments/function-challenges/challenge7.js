console.log("\nChallenge 7 Start:\n\n");

function alphabetize(string) {
  charArray = string.toLowerCase().split("");
  charArray.sort();
  newString = charArray.join("");
  return newString;
}

exampleSentence = "Hi there";
console.log(alphabetize(exampleSentence));
