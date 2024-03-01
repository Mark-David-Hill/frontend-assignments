const getThrows = function () {
  const options = ["rock", "paper", "scissors"];
  const prompt1 = "Rock, Paper, or Scissors?";
  const prompt2 =
    "Sorry, I didn't understand that. Please enter Rock, Paper, or Scissors.";
  let gaveInitialPrompt = false;
  let playerThrow;
  while (true) {
    if (!gaveInitialPrompt) {
      playerThrow = prompt(prompt1);
      gaveInitialPrompt = true;
    } else {
      playerThrow = prompt(prompt2);
    }
    if (playerThrow === null) {
      return false;
    } else {
      playerThrow = playerThrow.toLowerCase();
    }
    if (
      playerThrow === options[0] ||
      playerThrow === options[1] ||
      playerThrow === options[2]
    ) {
      break;
    }
  }
  const randNum = Math.floor(Math.random() * 3);
  const cpuThrow = options[randNum];
  const throws = [playerThrow, cpuThrow];
  return throws;
};

function checkIfWinner(throw1, throw2) {
  let isWinner = false;
  if (throw1 === throw2) {
    return "draw";
  }
  const winScenarios = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"],
  ];
  winScenarios.forEach(scenario => {
    if (throw1 === scenario[0] && throw2 === scenario[1]) {
      isWinner = true;
    }
  });
  return isWinner;
}

function playGame() {
  const throws = getThrows();
  if (throws === false) {
    return false;
  }
  alert(
    `Player: ${throws[0]} vs. CPU: ${throws[1]} \nPress Enter for the Results...`
  );

  let isWinner = checkIfWinner(throws[0], throws[1]);
  if (isWinner === "draw") {
    alert(`You both threw ${throws[0]}. It was a draw.`);
  } else if (isWinner === true) {
    alert(`${throws[0]} beats ${throws[1]}. You win!`);
  } else {
    alert(`${throws[1]} beats ${throws[0]}. You lose.`);
  }
  const playAgain = prompt("Do you want to play again? (y/n)");
  if (playAgain && playAgain.toLowerCase() === "y") {
    playGame();
  }
}
