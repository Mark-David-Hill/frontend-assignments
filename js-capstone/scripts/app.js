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

    const weight = document.createElement("p");
    weight.innerText = "0";

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
  // namesArray.length
  const randNum = Math.floor(Math.random() * namesArray.length);
  // for (let index = 0; index < 30; index++) {
  //   console.log(randNum);
  // }
  selectedStudentEl.innerText = namesArray[randNum];
}

const namesWrapper = document.getElementsByClassName("names-wrapper")[0];
const selectedStudentEl =
  document.getElementsByClassName("selected-student")[0];
let namesArray = [];

getStudents()
  .then((studentArray) => studentArray.map(getNames))
  .then((nameArray) => populateNamesList(nameArray, namesWrapper))
  .catch((err) => console.error(err));
