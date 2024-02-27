columns = document.querySelectorAll(".container div");
columns.forEach((col) => {
  colStyle = getComputedStyle(col);
  col.innerText = colStyle["backgroundColor"];
});
