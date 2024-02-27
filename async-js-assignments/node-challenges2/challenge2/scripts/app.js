dropdownMenu = document.querySelector(".dropdown-menu");
button = document.querySelector("button");
console.log(dropdownMenu);

function toggleMenu() {
  console.log("Toggle");
  console.log(dropdownMenu.style);
  dropdownMenu.style.display !== "flex"
    ? (dropdownMenu.style.display = "flex")
    : (dropdownMenu.style.display = "none");
}

button.addEventListener("click", toggleMenu);
