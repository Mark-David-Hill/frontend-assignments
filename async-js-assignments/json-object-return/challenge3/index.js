const getKanji = () => {
  return new Promise((resolve, reject) => {
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "https://kanjiapi.dev/v1/kanji/希");
    requestObj.responseType = "json";
    requestObj.send();
    requestObj.onload = () => {
      if (!requestObj.response.error) {
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
    const data = await getKanji();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

fulfillPromise()
  .then((data) => {
    console.log("Successfully Retrieved Data");
    console.log(data);
    prompt(`Successfully retrieved data for the ${data.kanji} kanji`);
    return data;
  })
  .then((data) => {
    console.log("Kanji: ", data.kanji);
    console.log("Meaning: ", data.heisig_en);
  })
  .catch((err) => console.error("Failed to retrieve data.", err));
