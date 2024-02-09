// console.log("yo yo yo");

// if ("5" != 5) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// const age = 15;

// const ternary =
//   age >= 16
//     ? "you can drive"
//     : 14 > age < 16
//     ? "you can have a permit"
//     : "sorry try in a couple years";

// console.log(ternary);

// const tfTernary = age >= 24 ? "You can rent a car" : "come back in a few years";

// console.log(tfTernary);

// const age = 17;

// switch (age) {
//   case 16:
//     var decision = "You can get a license";
//     break;
//   case 15:
//     var decision = "You can only get a permit";
//     break;
//   default:
//     var decision = "You cannot get a permit";
// }

// console.log(decision);

// > You cannot get a permit

// Create a JavaScript program that simulates a traffic light. Use a variable named currentLight to represent the current state of the traffic light. The program should have the following conditions below. Change the value of currentLight and observe the different messages logged to the console. Rewrite using switch-case.
// If currentLight is "red", log "Stop."
// If currentLight is "yellow", log "Proceed with caution."
// If currentLight is "green", log "Go."

// Exercise 1:

// let currentLight = "red";

// function checkLight(currentLight) {
//   if (currentLight === "red") {
//     console.log("Stop.");
//   } else if (currentLight === "yellow") {
//     console.log("Proceed with caution.");
//   } else if (currentLight === "green") {
//     console.log("Go.");
//   }
// }

// checkLight(currentLight);
// currentLight = "green";
// checkLight(currentLight);
// currentLight = "yellow";
// checkLight(currentLight);

// let currentLight = "red";

// function checkLight(currentLight) {
//   switch (currentLight) {
//     case "red":
//       console.log("Stop.");
//       break;
//     case "yellow":
//       console.log("Proceed with caution.");
//       break;
//     case "green":
//       console.log("Go.");
//       break;
//   }
// }

// checkLight(currentLight);
// currentLight = "green";
// checkLight(currentLight);
// currentLight = "yellow";
// checkLight(currentLight);

// Exercise 2.

// let userName = "admin";
// let userPass = "secret";

// if (userName === "admin" && userPass === "secret") {
//   console.log("Login successful. Welcome, Admin!");
// } else {
//   console.log("Login failed. Incorrect credentials.");
// }

// userName === "admin"
//   ? console.log("Login successful. Welcome, Admin!")
//   : console.log("Login failed. Incorrect credentials.");

// Exercise 3.
// let userRole = "admin";

// function checkRole(userRole) {
//   if (userRole === "admin") {
//     console.log("Full access granted. Welcome, Admin!");
//   } else if (userRole === "user") {
//     console.log("Limited access granted. Welcome, User!");
//   } else {
//     console.log("Access denied. Unknown user role.");
//   }
// }

// checkRole(userRole);
// userRole = "user";
// checkRole(userRole);
// userRole = "Other";
// checkRole(userRole);

let userRole = "admin";

function checkRole(userRole) {
  switch (userRole) {
    case "admin":
      console.log("Full access granted. Welcome, Admin!");
      break;
    case "user":
      console.log("Limited access granted. Welcome, User!");
      break;
    default:
      console.log("Access denied. Unknown user role.");
      break;
  }
}

checkRole(userRole);
userRole = "user";
checkRole(userRole);
userRole = "Other";
checkRole(userRole);
