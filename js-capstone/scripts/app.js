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

function createNewElement(elementType, innerText, newClass = null) {
  const newElement = document.createElement(elementType);
  newElement.innerText = innerText;
  newClass ? newElement.classList.add(newClass) : null;
  return newElement;
}

function appendChildren(parentElement, children) {
  children.forEach((child) => {
    parentElement.appendChild(child);
  });
}

function populateNamesList(names, namesWrapper) {
  namesArray = names;
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

function startStudentSelection() {
  const weightedNames = getWeightedNamesArray();
  if (weightedNames.length > 0) {
    studentSelectButton.disabled = true;
    spotlightDiv.classList.add("on");
    loadSpinner.classList.add("spin");
    for (let i = 0; i < namesWrapper.children.length; i++) {
      namesWrapper.children[i].classList.remove("selected");
    }
    selectedStudentEl.innerText = "Drum roll...";
    const shuffleInterval = setInterval(() => {
      for (let i = namesWrapper.children.length; i >= 0; i--) {
        namesWrapper.appendChild(
          namesWrapper.children[(Math.random() * i) | 0]
        );
      }
    }, 100);
    resolveStudentSelection(shuffleInterval, weightedNames);
  } else {
    alert(
      "In order to select a student, at least 1 student must have a weight above 0"
    );
  }
}

function resolveStudentSelection(shuffleInterval, weightedNames) {
  setTimeout(() => {
    const randNum = Math.floor(Math.random() * weightedNames.length);
    const selectedName = weightedNames[randNum];
    selectedStudentEl.innerText = selectedName;
    selectedStudentEl.children[1];
    const studentElement = getStudentElementByName(selectedName);
    changeWeight(studentElement.children[2].children[0]);
    if (isAllZeroWeight()) {
      resetWeights();
    }
    studentElement.classList.add("selected");
    spotlightDiv.classList.remove("on");
    loadSpinner.classList.remove("spin");
    clearInterval(shuffleInterval);
    studentSelectButton.disabled = false;
    isSelectingName = false;
  }, 2000);
}

function changeWeight(buttonElement = null) {
  let studentDiv = null;
  let weightValueElement = null;
  if (this.children) {
    studentDiv = this.parentElement.parentElement;
    weightValueElement = studentDiv.children[1];
    studentDiv.children[1].innerText === "1" && this.innerText === "-"
      ? studentDiv.children[0].classList.add("no-weight")
      : null;
    let currentValue = Number(weightValueElement.innerText);
    const changeValue = this.innerText === "+" ? 1 : -1;
    this.innerText === "+" || (currentValue > 0 && this.innerText === "-")
      ? (weightValueElement.innerText = currentValue + changeValue)
      : null;
    studentDiv.children[1].innerText === "0"
      ? studentDiv.children[0].classList.add("no-weight")
      : studentDiv.children[0].classList.remove("no-weight");
  } else {
    studentDiv = buttonElement.parentElement.parentElement;
    weightValueElement = studentDiv.children[1];
    let currentValue = Number(weightValueElement.innerText);
    if (currentValue > 0) {
      weightValueElement.innerText = currentValue - 1;
    }
    weightValueElement.innerText === "0"
      ? studentDiv.children[0].classList.add("no-weight")
      : null;
  }
}

function resetWeights() {
  for (
    let studentIndex = 0;
    studentIndex < namesWrapper.children.length;
    studentIndex++
  ) {
    const studentDiv = namesWrapper.children[studentIndex];
    console.log(studentDiv);
    studentDiv.children[1].innerText = "3";
    studentDiv.children[0].classList.remove("no-weight");
  }
}

function getWeightedNamesArray() {
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

function isAllZeroWeight() {
  for (
    let studentIndex = 0;
    studentIndex < namesWrapper.children.length;
    studentIndex++
  ) {
    if (namesWrapper.children[studentIndex].children[1].innerText !== "0") {
      return false;
    }
  }
  return true;
}

function getStudentElementByName(name) {
  for (let i = 0; i < namesWrapper.children.length; i++) {
    if (namesWrapper.children[i].children[0].innerText === name) {
      return namesWrapper.children[i];
    }
  }
}

function getName(student) {
  return student.name;
}

const namesWrapper = document.getElementsByClassName("names-wrapper")[0];
const selectedStudentEl =
  document.getElementsByClassName("selected-student")[0];
const studentSelectButton = document.getElementsByClassName(
  "student-select-button"
)[0];
const spotlightDiv = document.getElementsByClassName("spotlight")[0];
const loadSpinner = document.getElementsByClassName("fa-spinner")[0];
let namesArray = [];
let isSelectingName = false;

fetchStudents()
  .then((studentArray) => studentArray.map(getName))
  .then((nameArray) => populateNamesList(nameArray, namesWrapper))
  .catch((err) => console.error(err));
