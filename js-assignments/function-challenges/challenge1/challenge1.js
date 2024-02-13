console.log("Challenge 1 Start:\n\n");

function getLongestWord(wordArray) {
  longestWord = "";
  for (const word of wordArray) {
    if (word.length && word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

testArray = ["a", "b", "cc"];
console.log(getLongestWord(testArray));

const userWords = [];
userWords.push(
  prompt("Challenge 1: It's the get the longest word game! Type a word:")
);
userWords.push(prompt("Type another word:"));
userWords.push(prompt("Type one more word:"));
const userLongestWord = getLongestWord(userWords);
if (userLongestWord) {
  prompt(`the longest word is "${userLongestWord}".`);
} else {
  prompt("Sorry, I didn't catch any words. Please refresh and try again.");
}
