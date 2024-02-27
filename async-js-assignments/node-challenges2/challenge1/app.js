function makeHeader(headingSize, headingText) {
  const newHeader = document.createElement(`h${headingSize}`);
  newHeader.innerText = headingText;
  return newHeader;
}

function renderElement(element) {
  document.body.appendChild(element);
}

h1 = makeHeader(1, "Challenge 1");
renderElement(h1);

h2 = makeHeader(2, "Subtitle");
renderElement(h2);

h3 = makeHeader(3, "Yet another header");
renderElement(h3);

h6 = makeHeader(6, "Smallest header");
renderElement(h6);
