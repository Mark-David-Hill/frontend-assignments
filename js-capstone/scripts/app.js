async function getStudents() {
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
    weight.innerText = "0";
    weight.classList.add("weight");

    const buttonsWrapper = document.createElement("div");
    const minusButton = document.createElement("button");
    minusButton.innerText = "+";
    const plusButton = document.createElement("button");
    plusButton.innerText = "-";

    studentWrapper.appendChild(nameHeader);
    studentWrapper.appendChild(weight);
    buttonsWrapper.appendChild(plusButton);
    buttonsWrapper.appendChild(minusButton);
    studentWrapper.appendChild(buttonsWrapper);
    namesWrapper.appendChild(studentWrapper);
  });
}

function selectRandomStudent() {
  if (!isSelectingName) {
    isSelectingName = true;
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
    setTimeout(() => {
      const randNum = Math.floor(Math.random() * namesWrapper.children.length);
      console.log(namesWrapper.children[randNum]);
      selectedStudentEl.innerText =
        namesWrapper.children[randNum].children[0].innerText;
      namesWrapper.children[randNum].classList.add("selected");
      spotlightDiv.classList.remove("on");
      loadSpinner.classList.remove("spin");
      clearInterval(shuffleInterval);

      isSelectingName = false;
    }, 2000);
  }
}

const namesWrapper = document.getElementsByClassName("names-wrapper")[0];
const selectedStudentEl =
  document.getElementsByClassName("selected-student")[0];
const spotlightDiv = document.getElementsByClassName("spotlight")[0];
const loadSpinner = document.getElementsByClassName("fa-spinner")[0];
let namesArray = [];
let isSelectingName = false;

getStudents()
  .then((studentArray) => studentArray.map(getNames))
  .then((nameArray) => populateNamesList(nameArray, namesWrapper))
  .catch((err) => console.error(err));
