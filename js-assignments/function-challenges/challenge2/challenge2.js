console.log("\nChallenge 2 Start:\n\n");

function swap(string) {
  const firstChar = string.slice(0, 1);
  const middleChars = string.substring(1, string.length - 1);
  const lastChar = string.slice(-1);
  const newString = lastChar + middleChars + firstChar;
  return newString;
}

testString = "ryan";
console.log(swap(testString));

const userString = prompt(
  "Challenge 2: Enter a string. The first and last characters will be swapped."
);
swappedUserString = swap(userString);
if (swappedUserString) {
  prompt(`The swapped string is "${swappedUserString}".`);
} else {
  prompt(
    `It looks like you didn't type anything. Please refresh and try again.`
  );
}
