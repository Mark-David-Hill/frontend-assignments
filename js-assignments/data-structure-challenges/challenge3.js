const exampleArray = [1, 2, 3, 4, 5];
let pullFromStart = true;

function flipFlop(array) {
  loops = array.length;
  for (let i = 0; i < loops; i++) {
    if (pullFromStart) {
      console.log(array.shift());
      pullFromStart = false;
    } else {
      console.log(array.pop());
      pullFromStart = true;
    }
  }
}

flipFlop(exampleArray);
