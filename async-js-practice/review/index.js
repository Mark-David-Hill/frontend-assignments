// Challenge 1
// setTimeout(() => console.log("Mark"), 2000);

// Challenge 2
// const getName = new Promise((res) => {
//   setTimeout(() => res("Mark"), 2000);
// });

// getName.then((name) => console.log(name));

// Challenge 3: refactor into async function
// async function getName() {
//   let myPromise = new Promise((res) => {
//     setTimeout(() => {
//       res("Ian Miller");
//     }, 2000);
//   });
// }

// const getName = async () => {
//   const data = await setTimeout(() => {
//     return "Ian Miller";
//   }, 2000);
//   return data;
// };

// getName().then((info) => console.log(info));

// Challenge 4: Simple fetch request to swapi -get all planets and console log them

// async function getPlanets() {
//   const allPlanets = await fetch("https://www.swapi.tech/api/planets");
//   return allPlanets;
// }

// getPlanets()
//   .then((res) => res.json())
//   .then((results) => {
//     console.log(results);
//   });

// Challenge 5: create fetch request function with promise inside it handles fetching of data. Async function
// awaits original function, console.log 5th item of results
// const getPlanets = () => {
//   const myPromise = new Promise((res) => {
//     const data = fetch("https://www.swapi.tech/api/planets");
//     res(data);
//   });
//   return myPromise;
// };

// async function handleData() {
//   const data = await getPlanets();
//   const jsonData = await data.json();
//   console.log(jsonData);
//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   jsonData.results.forEach((result) => {
//     const p = document.createElement("p");
//     p.innerText = result.name;
//     div.appendChild(p);
//   });
// }

async function handleData() {
  try {
    const data = await fetch("https://www.swapi.tech/api/planets");
    const jsonData = await data.json();
    console.log(jsonData);
    const div = document.createElement("div");
    document.body.appendChild(div);
    jsonData.results.forEach((result) => {
      const p = document.createElement("p");
      p.innerText = result.name;
      div.appendChild(p);
    });
  } catch (error) {
    console.error("fetch error: ", error);
  }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  handleData();
});

// handleData();
