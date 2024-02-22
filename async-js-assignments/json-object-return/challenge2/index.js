const myPromise = () => {
  return new Promise((resolve, reject) => {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "https://www.swapi.tech/api/starships/3");
    requestObj.responseType = "json";
    requestObj.send();
    requestObj.onload = () => {
      if (requestObj.response.message !== "Not found") {
        resolve(requestObj.response);
      } else {
        alert("Could not retrieve data: The requested resource does not exist");
        reject("Fetch request failed");
      }
    };
  });
};

async function fulfillPromise() {
  try {
    const data = await myPromise();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

fulfillPromise()
  .then((data) => {
    console.log("Successfully Retrieved Data");
    console.log(data);
    prompt(
      `Successfully retrieved data for the ${data.result.properties.name}`
    );
    return data.result;
  })
  .then((result) => console.log("Starship Name: ", result.properties.name))
  .catch((err) => console.error("Failed to retrieve data.", err));
