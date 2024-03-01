button = document.createElement("button");
button.innerText = "Retrieve Data";
button.addEventListener("click", () => {
  fetch("https://www.swapi.tech/api/planets")
    .then((res) => res.json())
    .then((data) => {
      divContainer = document.createElement("div");
      divContainer.classList.add("container");
      for (const item of data.results) {
        div = document.createElement("div");

        p = document.createElement("p");
        p.innerText = `${item.uid} ${item.name}`;

        a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";

        a.appendChild(p);
        div.appendChild(a);
        divContainer.appendChild(div);
      }
      document.body.appendChild(divContainer);
    });
});

document.body.appendChild(button);

// button = document.createElement("button");
// button.innerText = "Retrieve Data";
// button.addEventListener("click", () => {
//   fetch("https://www.swapi.tech/api/planets")
//     .then((res) => res.json())
//     .then((data) => {
//       divContainer = document.createElement("div");
//       divContainer.classList.add("container");
//       for (const item of data.results) {
//         div = document.createElement("div");

//         p = document.createElement("p");
//         p.innerText = `${item.uid} ${item.name}`;

//         a = document.createElement("a");
//         a.href = item.url;
//         a.target = "_blank";

//         a.appendChild(p);
//         div.appendChild(a);
//         divContainer.appendChild(div);
//       }
//       document.body.appendChild(divContainer);
//     });
// });

// async function getSwapi() {
//   const resData = await fetch("https://www.swapi.tech/api/people")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("1", data);
//       return data;
//     })
//     .catch((err) => err);

//   console.log("2");
//   console.log("data", resData);
// }

// document.body.appendChild(button);

// getSwapi();
