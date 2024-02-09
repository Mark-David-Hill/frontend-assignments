// const mealIngredients = {
//   protein: "hot dog",
//   veg: {
//     name: "jalapeno",
//     quantity: 4,
//   },
//   condiment: "ketchup",
//   delicious: true,
// };

// console.log(mealIngredients["protein"]);
// console.log(mealIngredients.veg);
// console.log(mealIngredients);

// const keyRef = "protein";

// const mealIngredients = {
//   protein: "hot dog",
//   veg: {
//     name: "jalapeno",
//     quantity: 4,
//   },
//   condiment: "ketchup",
//   delicious: true,
// };

// console.log(mealIngredients[keyRef]);
// console.log(mealIngredients["cookTime"]);

// > hot dog

// const carDetails = { color: "black", cost: 10000, pineappleOnPizza: true };

// carDetails["doors"] = 4;
// console.log(carDetails);

// // carDetails[pineappleOnPizza] = false;
// // console.log(carDetails);

// delete carDetails["color"];
// console.log(carDetails);

// const user = {
//   userName: { first: "Mark", last: "Hill" },
//   isAdmin: true,
//   email: "mark@fake.com",
//   phone: "111-111-1111",
// };

// console.log(user);

// user.favLanguage = "Python";
// console.log(user);

// delete user["email"];
// console.log(user);

// const parentArray = [["pineapple", "ham"]];
// const parentObjLit = {
//   toppings: ["pepperoni", "olive"],
// };

// console.log(parentArray[0][1]);
// console.log(parentObjLit["toppings"][0]);

// const parentArray = [{ firstName: "Ryan" }];
// const parentObjLit = {
//   user: {
//     lastName: "Curtis",
//   },
// };

// console.log(parentArray[0]["firstName"]);
// console.log(parentObjLit["user"]["lastName"]);

// const funcArray = [
//   0,
//   1,
//   function sumNum(numOne, numTwo) {
//     return numOne + numTwo;
//   },
// ];

// console.log(funcArray[2](3, 7));
// console.log(funcArray[2](10, 5));

// const chickenInventory = {
//   name: "chicken",
//   type: "meat",
//   quantity: 4,
//   delicious: true,
//   isQuantityLow: function () {
//     return this.quantity < 2;
//   },
// };

// console.log(chickenInventory["isQuantityLow"]());

// Exercise 1:

// const fruits = ["apple", "banana", "orange", "grape"];
// fruits.push("strawberry");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits[1] = "kiwi";
// console.log(fruits);
// fruitsString = fruits.join("-");
// console.log(fruits);
// console.log("fruits string: ", fruitsString);
// fruits.unshift("watermelon");
// console.log(fruits);

// Exercise 2:

// const student = {
//   fullName: "Tyson Thorpe",
//   age: 34,
//   grades: [90, 95, 80, 100, 90, 85, 75, 80],
// };

// student.subject = "Math";
// console.log(student);
// student.grades.push(90);
// console.log(student);
// delete student.subject;
// console.log(student);
// student.fullName = "Mark Hill";
// console.log(student);

// Exercise 3:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][2]);
// matrix[2][1] = 12;
// matrix.push([10, 11, 12]);
// matrix.shift();
// console.log(matrix);

// Exercise 4:

// const company = {
//   name: "DevPipeline",
//   location: {
//     city: "Orem",
//     country: "USA",
//   },
//   employees: [
//     { name: "Ryan", position: "COO" },
//     { name: "Mark", position: "Software Engineer" },
//   ],
// };

// console.log(company.name);
// company["location"]["city"] = "New York";
// console.log(company);
// company.employees.push({ name: "Charlie", position: "Manager" });
// console.log(company);
// company.employees.splice(1, 1);
// console.log(company);
// company.employees.splice(1, 1);
// console.log(company);

// Exercise 5:

const tasks = [
  "Buy groceries",
  "Complete homework",
  function add(a, b) {
    return a + b;
  },
];

console.log(tasks[2](5, 7));
tasks[0] = "Clean the house";
console.log(tasks);
console.log(tasks[2](3, 9));
tasks.push("Read a book");
console.log(tasks);
