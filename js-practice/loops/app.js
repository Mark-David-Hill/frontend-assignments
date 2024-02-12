// addCount = 0;
// subCount = 0;

// // console.log(addCount++, subCount--);
// console.log(++addCount, --subCount);

// myArray = [1, 2, 3, 4, 5];

// sum = 0;

// for (let i of myArray) {
//   sum = sum + i;
//   console.log(sum);
// }

// const users = [
//   { id: 1, transaction_amt: 25.0 },
//   { id: 2, transaction_amt: 17.5 },
// ];

// numSum = 0;

// for (let user of users) {
//   for (let key in user) {
//     console.log(key);
//     if (key == "transaction_amt") {
//       console.log(user[key]);
//       numSum += user[key];
//     }
//   }
// }

// console.log(`Your total transaction is \$${numSum}`);

// let count = 10;

// do {
//   console.log(count);
//   --count;
// } while (count > 10);

// Come back 2:20

// Exercise 3.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Exercise 4.

// function getVowelCount(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   vowelCount = 0;
//   for (const char of string) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

// const myString = "Hello, my name is Mark";
// let testCount = getVowelCount(myString);
// console.log(`Vowel Count: ${vowelCount}`);

// Exercise 5

// const person = {
//   name: "Mark",
//   dob: "03/09/1989",
//   city: "Eagle Mountain",
//   state: "Utah",
//   country: "USA",
// };

// for (const key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// Math.floor
// Prompt

// Challenge 1

// for (let i = 1; i < 11; i++) {
//   console.log(i * 3);
// }

// Challenge 2

// const employees = [
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 60000 },
//   { name: "Charlie", salary: 70000 },
//   { name: "David", salary: 55000 },
// ];

// let totalSalaryExpense = 0;

// for (const employee of employees) {
//   totalSalaryExpense += employee["salary"];
// }
// console.log(`Total Salary Expense: $${totalSalaryExpense}`);

// Challenge 3

// const playlist = {
//   "Song 1": 180,
//   "Song 2": 240,
//   "Song 3": 200,
//   "Song 4": 300,
//   "Song 5": 210,
// };

// let totalSeconds = 0;

// for (const key in playlist) {
//   totalSeconds += playlist[key];
// }
// totalMinutes = Math.floor(totalSeconds / 60);
// remainingSeconds = totalSeconds % 60;

// console.log(`Total Time on Playlist: ${totalMinutes}:${remainingSeconds}`);

// Challenge 4

// const num = Math.floor(Math.random() * 100) + 1;
// console.log("Num:", num);

// let guessedNum = prompt("Guess a number between 1 and 100");
// console.log(num);
// while (guessedNum !== num.toString()) {
//   if (Number(guessedNum) > num) {
//     guessedNum = prompt("Too High. Guess again.");
//   } else {
//     guessedNum = prompt("Too Low. Guess again.");
//   }
// }
// console.log(`That's right! The Number was ${num}`);
// prompt(`That's right! The Number was ${num}`);
