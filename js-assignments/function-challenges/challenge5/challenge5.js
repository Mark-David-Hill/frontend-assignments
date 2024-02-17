console.log("\nChallenge 5 Start:\n\n");

function titleCase(string) {
  let wordArray = string.split(" ");
  let newArray = [];
  for (let word of wordArray) {
    const newWord = word[0].toUpperCase() + word.slice(1);
    newArray.push(newWord);
  }
  const newString = newArray.join(" ");
  return newString;
}

const exampleSentence = "I am a sentence";
console.log(titleCase(exampleSentence));

const userSentence = prompt(
  "Challenge 5: Please enter a sentence to Title-case:"
);
const titleCaseSentence = titleCase(userSentence);
prompt(`Your Title-cased sentence is: "${titleCaseSentence}"`);
