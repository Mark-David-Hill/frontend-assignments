// setTimeout(() => {
//   console.log("first");
// }, 2000);

// setTimeout(() => console.log("first"), 2000);

// console.log("second");

// const myPromise2 = () => {
//   return new Promise((resolve, reject) => {
//     let allowed = true;
//     if (allowed === true) {
//       resolve("Success");
//     } else {
//       reject("Failed");
//     }
//   });
// };

// console.log(myPromise2);
// console.log(myPromise2());

// myPromiseTwo()
//   .then((message) => {
//     console.log("This is in the then: " + message);
//   })
//   .catch((message) => {
//     console.error("This is in the catch: " + message);
//   })
//   .finally(() => {
//     console.log("And finally");
//   });

// for (let i = 0; i < 3; i++) {
//   myPromise2()
//     .then((data) => console.log(data, `: this is iteration ${i}`))
//     .catch((data) => console.log(data, `: this is iteration ${i}`));
// }

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const allow = false;

//     setTimeout(() => {
//       if (allow) {
//         const data = {
//           id: 1,
//           name: "John Doe",
//           course: "Front End",
//         };
//         resolve(data);
//       } else {
//         reject("Fetching Error: ");
//       }
//     }, 2000); // The time parameter, after callback
//   });
// };

// fetchData()
//   .then((result) => {
//     console.log("Data:", result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     let color = "red";
//     if (color === "red") {
//       resolve(color);
//     } else {
//       reject(color);
//     }
//   });
// };

// myPromise()
//   .then((color) => {
//     console.log("Success: The color was ", color);
//   })
//   .catch((color) => {
//     console.error("Failure: The color wasn't red. It was ", color);
//   })
//   .finally(() => {
//     console.log("Thus ends our look at the color and if it was red.");
//   });

// const fetchColorData = () => {
//   return new Promise((resolve, reject) => {
//     const allow = true;

//     setTimeout(() => {
//       if (allow) {
//         const color = {
//           cName: "red",
//           cHex: "#FF0000",
//           cType: "primary",
//         };
//         resolve(color);
//       } else {
//         reject("Fetching Error: could not get color data");
//       }
//     }, 2000);
//   });
// };

// fetchColorData()
//   .then((result) => {
//     console.log("Color Data:", result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// succeed number < 15, fail if > 15

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let testNum = 5;
//       if (testNum <= 15) {
//         resolve("Success! The number was less than or equal to 15.");
//       } else {
//         reject("Failed. The number was greater than 15.");
//       }
//     }, 2000);
//   });
// };

// getData()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.error(message);
//   })
//   .finally(() => {
//     console.log("Number testing complete");
//   });

// Promise Object w/o Async/Await

// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data from Promise");
//   });
// };

// myPromise().then((data) => console.log(data));

// // vs. Async/Await

// async function myAsync() {
//   return "Data from Promise (Async/Await)";
// }

// myAsync().then((data) => console.log(data));

// function timedFunc(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function runFunc() {
//   const x = await timedFunc(10);
//   console.log(x);
// }

// runFunc();
// // In Terminal, after 2 seconds
// // 10

// const myPromise = () =>
//   new Promise((res, rej) => setTimeout(() => res("Some Data"), 2000));

// await myPromise();

// In Terminal
// SyntaxError: await is only valid in async functions
// and the top level bodies of modules

// async function greeting() {
//   try {
//     return "Resolved";
//   } catch {
//     return "Rejected";
//   }
// }

// greeting()
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Greeting Error: ", err));

// async function greeting() {
//   try {
//     throw new Error("Initial Error");
//     return "Resolved";
//   } catch (e) {
//     throw new Error(e);
//   }
// }

// greeting()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// // In Terminal
// // Rejected

// *********Used in upcoming assignment**********

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// async function timer() {
//   for (let i = 0; i < 10; i++) {
//     await sleep(1000);
//     console.log(i);
//   }
// }

// timer();

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// async function timer() {
//   for (let i = 0; i < 10; i++) {
//     await sleep(1000);
//     console.log(i);
//   }
// }

// async function init() {
//   await timer();
//   console.log("first call complete");
//   await timer();
//   console.log("second call complete");
// }

// init();

// const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// async function timer(string) {
//   for (let i = 0; i < string.length; i++) {
//     await sleep(1000);
//     console.log(string[i]);
//   }
// }

// timer("Mark");

// async function init() {
//   await timer("Mark");
//   await timer("Hill");
// }

// init();

// const requestObject = new XMLHttpRequest();

// requestObject.open("GET", "https://www.swapi.tech/api/planets");
// requestObject.responseType = "json";
// requestObject.send();
// requestObject.onload = () => {
//   console.log(requestObject);
//   console.log(requestObject.response);
//   console.log(requestObject.response.results);
//   console.log(requestObject.response.results[0]);
// };

// 3:18
// Fetch starships, get 3rd starship's name

const requestObj = new XMLHttpRequest();
requestObj.open("GET", "https://www.swapi.tech/api/starships/3");
requestObj.responseType = "json";
requestObj.send();
requestObj.onload = () => {
  console.log(requestObj.response);
  console.log(requestObj.response.result.properties.name);
};

// Challenge 3: Find another API, make successful request to API
