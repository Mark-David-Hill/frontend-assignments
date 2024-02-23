function getData() {
  fetch("https://swapi.tech/api/people/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const html = data.results
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join(" ");

      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((err) => {
      console.error(err);
    });
}

getData();
