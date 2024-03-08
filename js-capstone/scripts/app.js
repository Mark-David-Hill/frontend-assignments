import { createNewElement, appendChildren } from "./helpers.js";

async function fetchStudents() {
  try {
    const response = await fetch("https://fe-students.onrender.com/api/users");
    const jsonData = await response.json();
    const results = jsonData.results;
    return results;
  } catch (e) {
    alert(
      `${e} Was unable to fetch student names. Please try again by refreshing the page.`
    );
    throw new Error(e);
  }
}

function populateNamesList(names, namesWrapper) {
  names.forEach((name) => {
    const studentWrapper = document.createElement("div");
    const nameHeader = createNewElement("p", name, "list-name");
    const weight = createNewElement("p", "3", "weight");

    const buttonsWrapper = document.createElement("div");
    const minusButton = createNewElement("button", "-");
    minusButton.addEventListener("click", changeWeight);
    const plusButton = createNewElement("button", "+");
    plusButton.addEventListener("click", changeWeight);

    appendChildren(buttonsWrapper, [minusButton, plusButton]);
    appendChildren(studentWrapper, [nameHeader, weight, buttonsWrapper]);
    namesWrapper.appendChild(studentWrapper);
  });
}

function setIsLoading(weightedNames, namesWrapper) {
  studentSelectButton.disabled = true;
  spotlightDiv.classList.add("on");
  loadSpinner.classList.add("spin");
  for (let i = 0; i < namesWrapper.children.length; i++) {
    namesWrapper.children[i].classList.remove("selected");
  }

  selectedStudentEl.innerText = "Drum roll...";
  const shuffleInterval = setInterval(() => {
    for (let i = namesWrapper.children.length; i >= 0; i--) {
      namesWrapper.appendChild(namesWrapper.children[(Math.random() * i) | 0]);
    }
  }, 100);
  resolveStudentSelection(shuffleInterval, weightedNames, namesWrapper);
}

function startStudentSelection() {
  const weightedNames = getWeightedNamesArray(namesWrapper);
  weightedNames.length > 0 ? 
    setIsLoading(weightedNames, namesWrapper) : 
    alert("In order to select a student, at least 1 student must have a weight above 0");
}

function resolveStudentSelection(shuffleInterval, weightedNames, namesWrapper) {
  setTimeout(() => {
    const randNum = Math.floor(Math.random() * weightedNames.length);
    const selectedName = weightedNames[randNum];
    selectedStudentEl.innerText = selectedName;
    const studentElement = getStudentElementByName(selectedName, namesWrapper);
    changeWeight(studentElement.children[2].children[0]);
    isAllZeroWeight(namesWrapper) ? resetWeights(namesWrapper) : null;
    studentElement.classList.add("selected");
    spotlightDiv.classList.remove("on");
    loadSpinner.classList.remove("spin");
    clearInterval(shuffleInterval);
    studentSelectButton.disabled = false;
    isSelectingName = false;
  }, 2000);
}

function changeWeightFromButton(button) {
  const studentDiv = button.parentElement.parentElement;
  const weightValueElement = studentDiv.children[1];
  const currentValue = Number(weightValueElement.innerText);
  const changeValue = button.innerText === "+" ? 1 : -1;

  studentDiv.children[1].innerText === "1" && button.innerText === "-" ? 
    studentDiv.children[0].classList.add("no-weight") : null

  button.innerText === "+" || (currentValue > 0 && button.innerText === "-") ? 
    weightValueElement.innerText = currentValue + changeValue : null;

  studentDiv.children[1].innerText === "0" ? 
    studentDiv.children[0].classList.add("no-weight") : 
    studentDiv.children[0].classList.remove("no-weight");
}

function changeWeight(buttonElement = null) {
  if (this) {
    changeWeightFromButton(this);
  } else {
    const studentDiv = buttonElement.parentElement.parentElement;
    const weightValueElement = studentDiv.children[1];
    const currentValue = Number(weightValueElement.innerText);
    currentValue > 0 ? weightValueElement.innerText = currentValue - 1 : null;
    weightValueElement.innerText === "0" ? studentDiv.children[0].classList.add("no-weight") : null;
  }
}

function resetWeights(namesWrapper) {
  for (const studentDiv of namesWrapper.children) {
    studentDiv.children[1].innerText = "3";
    studentDiv.children[0].classList.remove("no-weight");
  }
}

function getWeightedNamesArray(namesWrapper) {
  let namesArray = [];
  for (
    let studentIndex = 0;
    studentIndex < namesWrapper.children.length;
    studentIndex++
  ) {
    const weight = Number(
      namesWrapper.children[studentIndex].children[1].innerText
    );
    for (let nameCount = 0; nameCount < weight; nameCount++) {
      namesArray.push(
        namesWrapper.children[studentIndex].children[0].innerText
      );
    }
  }
  return namesArray;
}

function isAllZeroWeight(namesWrapper) {
  for (let studentIndex = 0; studentIndex < namesWrapper.children.length; studentIndex++) {
    if (namesWrapper.children[studentIndex].children[1].innerText !== "0") {
      return false;
    }
  }
  return true;
}

function getStudentElementByName(name, namesWrapper) {
  for (let i = 0; i < namesWrapper.children.length; i++) {
    if (namesWrapper.children[i].children[0].innerText === name) {
      return namesWrapper.children[i];
    }
  }
}

const getName = student => student.name;


const namesWrapper = document.getElementsByClassName("names-wrapper")[0];
const selectedStudentEl =
  document.getElementsByClassName("selected-student")[0];
const studentSelectButton = document.getElementsByClassName(
  "student-select-button"
)[0];
const spotlightDiv = document.getElementsByClassName("spotlight")[0];
const loadSpinner = document.getElementsByClassName("fa-spinner")[0];
let isSelectingName = false;
studentSelectButton.addEventListener("click", startStudentSelection)

fetchStudents()
  .then((studentArray) => studentArray.map(getName))
  .then((namesArray) => populateNamesList(namesArray, namesWrapper))
  .catch((err) => console.error(err));
