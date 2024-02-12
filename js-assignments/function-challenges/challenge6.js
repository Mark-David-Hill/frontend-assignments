console.log("\nChallenge 6 Start:\n\n");

function getLongestWord(string) {
  wordArray = string.split(" ");
  longestWord = "";
  for (let word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

exampleSentence = "This string has several different values";
console.log(getLongestWord(exampleSentence));
