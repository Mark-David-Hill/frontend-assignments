// const hikingItem = document.querySelector(".hobbies-list li:nth-child(3)");

// console.log(hikingItem);

// const header = document.querySelector("h1");

// console.dir(header);
// userData = {};

// function submitForm() {
//   console.log("form submitted");
//   userData.name = document.getElementById("name").value;
//   userData.amount = Number(document.getElementById("amount").value);
//   console.log(userData);
// }

// userData = {};
// userData.extras = [];

// function submitForm() {
//   console.log("form submitted");
//   if (document.getElementById("extra1").checked) {
//     userData.extras.push(document.getElementById("extra1").value);
//   }

//   if (document.getElementById("extra2").checked) {
//     userData.extras.push(document.getElementById("extra2").value);
//   }

//   if (document.getElementById("extra3").checked) {
//     userData.extras.push(document.getElementById("extra3").value);
//   }

//   console.log(userData);
// }

const userData = {};
userData.extras = [];

let radioSelect = document.getElementsByName("pizza-size");
let checkboxes = document.getElementsByName("extra");

function submitForm() {
  console.log("form submitted");
  userData.name = document.getElementById("name").ariaValueMax;
  userData.amoun = Number(document.getElementById("amount").value);

  for (const extra of checkboxes) {
    if (extra.checked) {
      userData.extras.push(document.extra.value);
    }

    // if (document.getElementById("extra2").checked) {
    //   userData.extras.push(document.getElementById("extra2").value);
    // }

    // if (document.getElementById("extra3").checked) {
    //   userData.extras.push(document.getElementById("extra3").value);
    // }
  }

  for (const element of radioSelect) {
    if (element.checked) {
      userData.pizzaSize = element.value;
    }
  }
  console.log(radioSelect);
  console.log(userData);
}

// userData = {};

// let radioSelect = document.getElementsByName("pizza-size");

// function submitForm() {
//   for (const element of radioSelect) {
//     if (element.checked) {
//       userData.pizzaSize = element.value;
//     }
//   }
//   console.log(radioSelect);
//   console.log(userData);
// }

// In Terminal:

// {'pizzaSize': 'large'}
