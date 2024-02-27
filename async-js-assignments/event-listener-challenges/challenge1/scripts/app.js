function generateHex() {
  let hexString = "#";
  for (let i = 0; i < 6; i++) {
    const randInt = Math.floor(Math.random() * 16);
    let hexCharacter = "";
    switch (randInt) {
      case 10:
        hexCharacter = "A";
        break;
      case 11:
        hexCharacter = "B";
        break;
      case 12:
        hexCharacter = "C";
        break;
      case 13:
        hexCharacter = "D";
        break;
      case 14:
        hexCharacter = "E";
        break;
      case 15:
        hexCharacter = "F";
        break;
      default:
        hexCharacter = randInt;
        break;
    }
    hexString += hexCharacter;
  }
  return hexString;
}

for (let divCount = 0; divCount < 12; divCount++) {
  const hexValue = generateHex();
  console.log(hexValue);
  const newDiv = document.createElement("div");
  newDiv.innerText = hexValue;
  newDiv.style.backgroundColor = hexValue;
  const colorsContainer = document.querySelector(".colors-container");
  colorsContainer.append(newDiv);
}
