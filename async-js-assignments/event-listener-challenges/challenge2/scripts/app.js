header = document.querySelector("h2");
headerEditInput = document.querySelector("#header-edit-input");
deleteButton = document.querySelector("button");

headerEditInput.addEventListener(
  "input",
  () => (header.innerText = headerEditInput.value)
);

headerEditInput.addEventListener("input", () => {
  if (headerEditInput.value.length >= 50) {
    headerEditInput.disabled = true;
    alert("Sorry, you cannot input more than 50 characters.");
  }
});

deleteButton.addEventListener("click", () => {
  (header.innerText = ""), (headerEditInput.value = "");
  headerEditInput.disabled = false;
});
