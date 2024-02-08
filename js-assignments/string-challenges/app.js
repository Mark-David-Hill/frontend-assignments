function isString(varToCheck) {
  if (typeof varToCheck === "string") {
    return true;
  } else {
    return false;
  }
}

console.log("\nisString Function tests:\n");
console.log('isString("abc") => true');
console.log(isString("abc"));
console.log("isString(190) => false");
console.log(isString(190));

function isBlankString(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log("\nisBlankString Function tests:\n");
console.log('isBlankString("") => true');
console.log(isBlankString(""));
console.log('isBlankString("fjfjf") => false');
console.log(isBlankString("fjfjf"));

function capitalizeFirst(str) {
  const capitalLetter = str.charAt(0).toUpperCase();
  const newStr = capitalLetter + str.slice(1);
  return newStr;
}

console.log("\ncapitalizeFirst Function tests:\n");
console.log('capitalizeFirst("abcdef") = > "Abcdef"');
console.log(capitalizeFirst("abcdef"));

function abbr(fullName) {
  const nameArray = fullName.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[1];
  const LastNameInitial = lastName[0];
  const newName = firstName + " " + LastNameInitial + ".";
  return newName;
}

console.log("\nabbr Function tests:\n");
console.log('abbr("Ryan Curtis") => "Ryan C."');
console.log(abbr("Ryan Curtis"));

function truncate(str, index) {
  const newStr = str.slice(0, index + 1) + "...";
  return newStr;
}

console.log("\ntruncate Function tests:\n");
console.log('truncate("I am a long sentence", 5) => "I am a...');
console.log(truncate("I am a long sentence", 5));

function sliceFromChar(str, char) {
  const charIndex = str.indexOf(char);
  const endOfString = str.slice(charIndex);
  return endOfString;
}

console.log("\nsliceFromChar Functions tests:\n");
console.log('Output: "grappled on the road side!"');
console.log(sliceFromChar("The practioners grappled on the road side!", "g"));
