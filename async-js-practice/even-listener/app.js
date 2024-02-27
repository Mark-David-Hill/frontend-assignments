// window.addEventListener("keyup", function (e) {
//   console.log(e);
// });
// window.addEventListener("click", (e) => {
//   console.log(e);
// });

function logToConsole() {
  console.log("hello from the console!!");
}

ccb = document.querySelector(".color-change-button");

ccb.addEventListener("click", function changeColor() {
  if (ccb.style["backgroundColor"] === "blue") {
    ccb.style["backgroundColor"] = "white";
  } else {
    ccb.style["backgroundColor"] = "blue";
  }
});

addToBodyandList = () => {
  const newNode = document.createElement("h2");
  newNode.innerText = "hello from inside body node";
  newNode.style["textDecoration"] = "underline";
  document.body.appendChild(newNode);

  const inputList = document.getElementById("input-list");
  const nonToppings = document.getElementById("non-toppings-list");
  const newListItem = document.createElement("li");
  newListItem.innerText = inputList.value;
  newListItem.style["textDecoration"] = "underline";
  nonToppings.insertBefore(newListItem, nonToppings.lastChild);
  inputList.value = "";
};

window.addEventListener("click", (e) => {
  newDiv = document.createElement("div");
  newDiv.style.position = "absolute";
  xPosition = e.clientX - 50;
  yPosition = e.clientY - 50;
  newDiv.style.left = xPosition + "px";
  newDiv.style.top = yPosition + "px";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "orange";
  document.body.appendChild(newDiv);
});
