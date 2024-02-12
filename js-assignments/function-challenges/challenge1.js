console.log("Challenge 1 Start:\n\n");

function getLongestWord(wordArray) {
  longestWord = "";
  for (const word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

testArray = ["a", "b", "cc"];
console.log(getLongestWord(testArray));
