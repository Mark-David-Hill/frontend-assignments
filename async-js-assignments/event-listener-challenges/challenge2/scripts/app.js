
function addUpdateHeaderEvent (inputElement, headerElement) {
  inputElement.addEventListener(
    "input",
    () => (headerElement.innerText = inputElement.value))
};
  
function addCharLimitEvent (inputElement) {
  inputElement.addEventListener("input", () => {
    if (inputElement.value.length >= 50) {
      inputElement.disabled = true;
      alert("Sorry, you cannot input more than 50 characters.");
    }
  });
} 
  
function addDeleteEvent(button, headerElement, inputElement) {
  button.addEventListener("click", () => {
    (headerElement.innerText = ""), (headerEditInput.value = "");
    headerEditInput.disabled = false;
  });
} 
  
const header = document.querySelector("h2");
const headerEditInput = document.querySelector("#header-edit-input");
const deleteButton = document.querySelector("button");

addUpdateHeaderEvent(headerEditInput, header)
addCharLimitEvent(headerEditInput)
addDeleteEvent(deleteButton, header, headerEditInput)