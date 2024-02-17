console.log("\nChallenge 7 Start:\n\n");

function alphabetize(string) {
  let charArray = string.toLowerCase().split("");
  charArray.sort();
  const newString = charArray.join("");
  return newString;
}

const exampleSentence = "Hi there";
console.log(alphabetize(exampleSentence));

const userString = prompt(
  "Challenge 7: Please Enter a string to be alphabetized:"
);
const orderedString = alphabetize(userString);
prompt(`Your alphabetized string is "${orderedString}"`);
