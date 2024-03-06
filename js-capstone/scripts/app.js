async function fetchStudents() {
  try {
    const response = await fetch("https://fe-students.onrender.com/api/users");
    const jsonData = await response.json();
    const results = jsonData.results;
    return results;
  } catch (e) {
    throw new Error(e);
  }
}

function getNames(student) {
  return student.name;
}

function populateNamesList(names, namesWrapper) {
  namesArray = names;
  names.forEach((name) => {
    const studentWrapper = document.createElement("div");

    const nameHeader = document.createElement("p");
    nameHeader.innerText = name;
    nameHeader.classList.add("list-name");

    const weight = document.createElement("p");
    weight.innerText = "5";
    weight.classList.add("weight");

    const buttonsWrapper = document.createElement("div");
    const minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.addEventListener("click", changeWeight);
    const plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.addEventListener("click", changeWeight);

    studentWrapper.appendChild(nameHeader);
    studentWrapper.appendChild(weight);
    buttonsWrapper.appendChild(minusButton);
    buttonsWrapper.appendChild(plusButton);
    studentWrapper.appendChild(buttonsWrapper);
    namesWrapper.appendChild(studentWrapper);
  });
}

function resolveStudentSelection(shuffleInterval) {
  setTimeout(() => {
    const weightedNames = getWeightedNamesArray();
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
    resolveStudentSelection(shuffleInterval);
  } else {
    alert(
      "In order to select a student, at least 1 student must have a weight above 0"
    );
  }
}

function changeWeight(buttonElement = null) {
  weightValueElement = this.children
    ? this.parentElement.parentElement.children[1]
    : buttonElement.parentElement.parentElement.children[1];
  currentValue = Number(weightValueElement.innerText);
  const changeValue = this.innerText === "+" ? 1 : -1;
  currentValue > 0
    ? (weightValueElement.innerText = currentValue + changeValue)
    : null;
}

function resetWeights() {
  for (
    let studentIndex = 0;
    studentIndex < namesWrapper.children.length;
    studentIndex++
  ) {
    namesWrapper.children[studentIndex].children[1].innerText = "5";
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
  .then((studentArray) => studentArray.map(getNames))
  .then((nameArray) => populateNamesList(nameArray, namesWrapper))
  .catch((err) => console.error(err));
