console.log("\nChallenge 3 Start:\n\n");

function capitalize(string) {
  const wordArray = string.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    newWord = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
    wordArray[i] = newWord;
  }
  const newString = wordArray.join(" ");
  return newString;
}

testString = "I am a sentence";
newString = capitalize(testString);
console.log(newString);
