function getThrows() {
  const options = ["rock", "paper", "scissors"];
  let playerThrow = undefined;
  while (true) {
    playerThrow = prompt("Rock, Paper, or Scissors?");
    lowerCaseThrow = playerThrow ? playerThrow.toLowerCase : "";
    if (
      playerThrow === options[0] ||
      playerThrow === options[1] ||
      playerThrow === options[2]
    ) {
      break;
    } else {
      prompt("Sorry, I didn't understand that.");
    }
  }
  const randInt = Math.floor(Math.random() * 3);
  const cpuThrow = options[randInt];
  let throws = [];
  throws.push(playerThrow);
  throws.push(cpuThrow);
  return throws;
}

function checkIfWinner(throw1, throw2) {
  let isWinner = false;
  const winScenarios = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"],
  ];
  winScenarios.forEach((scenario) => {
    if (throw1 === scenario[0] && throw2 === scenario[1]) {
      isWinner = true;
    }
  });
  return isWinner;
}

function playGame() {
  let throws = getThrows();
  prompt(
    `Player: ${throws[0]} vs. CPU: ${throws[1]} \nPress Enter for the Results...`
  );

  if (checkIfWinner(throws[0], throws[1])) {
    return prompt("You win!");
  } else if (checkIfWinner(throws[1], throws[0])) {
    return prompt("You lose");
  } else {
    return prompt("It was a draw");
  }
}

while (true) {
  if (
    prompt("Press Enter to play rock paper scissors. Type 'q' to quit") === "q"
  ) {
    break;
  }
  playGame();
}
