const button = document.querySelector("button");
const subInput = document.querySelector("input");
const result = document.querySelector("#result");

function renderList(json) {
  const posts = json.data.children;
  console.log(posts);
  return `<ol> ${posts
    .map(
      (post) =>
        `<li>${post.data.title} <a href=${post.data.url} target="_blank">Link</a></li>`
    )
    .join(" ")}</ol>`;
}

async function fetchTopFive(sub) {
  try {
    const response = await fetch(
      `https://www.reddit.com/r/${sub}/top/.json?limit=5`
    );
    if (response.ok) {
      console.log(response);
      const jsonData = await response.json();
      result.innerHTML = renderList(jsonData);
    } else {
      result.innerHTML = `Response.status: ${response.status}`;
      co;
    }
  } catch (err) {
    result.innerHTML = `Response status: ${response.status}`;
    console.error(response.status);
  }
}

button.addEventListener("click", () => {
  fetchTopFive(subInput.value);
});
