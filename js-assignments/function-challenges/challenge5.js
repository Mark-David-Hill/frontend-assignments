console.log("\nChallenge 5 Start:\n\n");

function titleCase(string) {
  wordArray = string.split(" ");
  newArray = [];
  for (let word of wordArray) {
    newWord = word[0].toUpperCase() + word.slice(1);
    newArray.push(newWord);
  }
  newString = newArray.join(" ");
  return newString;
}

exampleSentence = "I am a sentence";
console.log(titleCase(exampleSentence));
