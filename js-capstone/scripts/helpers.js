export function createNewElement(elementType, text, newClass = null) {
  const newElement = document.createElement(elementType);
  newElement.innerText = text;
  newClass ? newElement.classList.add(newClass) : null;
  return newElement;
} 

export function appendChildren(parentElement, children) {
  children.forEach((child) => {
    parentElement.appendChild(child);
  });
}