console.log("\nChallenge 6 Start:\n\n");

function getLongestWord(string) {
  let wordArray = string.split(" ");
  let longestWord = "";
  for (let word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

exampleSentence = "This string has several different values";
console.log(getLongestWord(exampleSentence));

const userSentence = prompt(
  "Challenge 6: Get the longest word. Please enter a sentence:"
);
const longestUserWord = getLongestWord(userSentence);
prompt(`The longest word in that sentence is: "${longestUserWord}"`);
