// function subTotal(price, quantity) {
//   return price * quantity;
// }

// const milk = subTotal(3.78, 2);
// const eggs = subTotal(1.87, 3);
// const cheese = subTotal(5, 1);

// total = milk + eggs + cheese;

// console.log(total);

// Exercise 1

// function calculateArea(width, length) {
//   area = width * length;
//   return area;
// }

// console.log(calculateArea(8, 5));

// Exercise 2

// const greetUser = function (name = "User") {
//   return `Hello ${name}, how are you today?`;
// };

// console.log(greetUser());
// console.log(greetUser("Mark"));

// Exercise 3

// const power = function (base, exponent) {
//   result = base ** exponent;
//   return result;
// };

// console.log(power(2, 3));

// Exercise 4

// const square = function (num) {
//   result = num * num;
//   return result;
// };

// console.log(square(9));

// const myArray = ["a", "b", "c", "d", "e"];

// myArray.forEach(function (char, idx) {
//   console.log(idx, char);
// });

// const myArray2 = ["a", "b", "c", "d", "e"];

// myArray2.map(function (char, idx) {
//   console.log(idx, char);
// });

// const myArray = [1, 2, 3, 4, 5];

// let newArray = myArray.map((num, idx) => {
//   return (myArray[idx] = num * 2);
// });

// console.log(myArray);
// console.log(newArray);

// const myArray = [1, 2, 3, 4, 5];

// let newArray = myArray.forEach((num, idx) => {
//   return (myArray[idx] = num * 2);
// });

// console.log(myArray);
// console.log(newArray);

// const mixedArray = [
//   ["ryan", { age: 34 }],
//   () => "hey there",
//   55,
//   "pineapple pizza",
//   ["oranges"],
// ];

// let arrays = [];
// let strings = [];
// let functions = [];
// let numbers = [];

// mixedArray.forEach((item) => {
//   if (Array.isArray(item)) arrays.push(item);
//   if (typeof item === "string") strings.push(item);
//   if (typeof item === "function") functions.push(item);
//   if (typeof item === "number") numbers.push(item);
// });

// console.log({
//   arrays,
//   strings,
//   numbers,
//   functions,
// });

// Exercise 1
// const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

// fruitsArray.forEach((fruit, idx) => {
//   console.log(fruit, idx);
// });

// Exercise 2

// const originalNumbers = [3, 8, 12, 5, 7];
// const doubledNumbers = originalNumbers.map((num) => {
//   return num * 2;
// });
// console.log(originalNumbers);
// console.log(doubledNumbers);

// Exercise 3

// const mixedData = [
//   42,
//   "hello",
//   ["world", 2023],
//   () => "function",
//   true,
//   null,
//   { key: "value" },
// ];

// let arrays = [];
// let strings = [];
// let numbers = [];
// let functions = [];

// mixedData.forEach((item) => {
//   if (Array.isArray(item)) arrays.push(item);
//   if (typeof item === "string") strings.push(item);
//   if (typeof item === "number") numbers.push(item);
//   if (typeof item === "function") functions.push(item);
// });

// console.log(arrays);
// console.log(strings);
// console.log(functions);
// console.log(numbers);

// Exercise 4

// const wordsArray = ["apple", "banana", "grape"];
// const uppercaseWords = wordsArray.map((fruit) => {
//   return fruit.toUpperCase();
// });

// console.log(uppercaseWords);

// Exercise 5

// const matrix = [
//   [2, 4, 6],
//   [1, 3, 5],
//   [8, 10, 12],
// ];
// // Output:
// // 12
// // 9
// // 30

// matrix.forEach((numArray) => {
//   let sum = 0;
//   numArray.forEach((num) => {
//     sum += num;
//   });
//   // for (const num of numArray) {
//   //   sum += num;
//   // }
//   console.log(`Sum: ${sum}`);
// });

// //
// // //Arrow Functions
// //

// // Declare an arrow function called greetUser that takes no parameters and implicitly returns the string "Welcome to the course!". Call the function and log the result to the console.
// // Exercise 1
// const greetUser = () => "Welcome to the course!";
// console.log(greetUser());

// // Create an arrow function named doubleNumber that takes a single parameter num and returns the result of doubling that number. Call the function with the argument 7 and log the result.
// // Exercise 2
// const doubleNumber = (num) => num * 2;
// console.log(doubleNumber(7));

// // Declare an arrow function called cubeRoot that takes a single parameter x. Use the return keyword explicitly to return the cube root of the parameter.
// // Exercise 3
// const cubeRoot = (x) => {
//   return x ** 3;
// };
// console.log(cubeRoot(5));

// // Create an arrow function named generateRandomNumber that takes no parameters and returns a random integer between 1 and 10 (inclusive). Call the function and log the result to the console.
// // Exercise 4
// const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// console.log(generateRandomNumber());

// // Declare an arrow function called calculateArea that takes two parameters length and width. Calculate and return the area (length * width) using the implicit return feature of arrow functions.
// // Exercise 5
// const calculateArea = (length, width) => length * width;
// console.log(calculateArea(3, 5));

// const count = 0;

// function addCount() {
//   return ++count;
// }

// addCount();

// > TypeError: Assignment to constant variable.

// milkInventory = {
//   price: 2.78,
//   quantity: 4,
// };

// const subtotal = (item) => item["price"] * item["quantity"];
// const transaction = subtotal(milkInventory);
// console.log(transaction);

// console.log(myFunc());

// function myFunc() {
//   return "declaration";
// }

// class House {
//   foundation = "concrete";
// }

// const cabin = new House();
// console.log(cabin);
// console.log(cabin.foundation);

// Exercise 1

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine = () => console.log("Engine starting... now!");
  drive = (speed) => console.log(`The car is driving at a speed of ${speed}`);
}

class ElectricCar extends Car {
  constructor(make, model, year, color, batteryCapacity) {
    super(make, model, year, color);
    this.batteryCapacity = batteryCapacity;
  }
  chargeBattery = () => console.log("The battery is being charged");
}

const honda = new Car("honda", "accord", 2010, "blue");

console.log(honda);
console.log(honda.make);
console.log(honda.year);
honda.startEngine();
honda.drive("30mph");

const tesla = new ElectricCar(
  "tesla",
  "Model 3 compact sedan",
  2020,
  "silver",
  "50kWh"
);

console.log("\n\nPart 2: Electric Car Subclass\n\n");
console.log(tesla);
tesla.startEngine();
console.log(tesla);
tesla.drive("60mph");
console.log(tesla);
tesla.chargeBattery();
console.log(tesla);
