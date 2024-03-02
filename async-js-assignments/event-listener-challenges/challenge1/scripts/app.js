function generateHex() {
  let hexString = "#";
  const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  for (let i = 0; i < 6; i++) {
    const randNum = Math.floor(Math.random() * 16);
    let hexCharacter = hexValues[randNum];
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
