class Column {
  constructor() {
    this.position = Math.floor(Math.random() * (colSymbols.length - 2));
  }
  moveCol() {
    this.position < colSymbols.length - 3
      ? (this.position += 1)
      : (this.position = 0);
  }
}

function getDisplay(col1Position, col2Position, col3Position) {
  const display = `
   ______________
  | ${colSymbols[col1Position]} | ${colSymbols[col2Position]} | ${
    colSymbols[col3Position]
  } |
->| ${colSymbols[col1Position + 1]} | ${colSymbols[col2Position + 1]} | ${
    colSymbols[col3Position + 1]
  } |<-
  | ${colSymbols[col1Position + 2]} | ${colSymbols[col2Position + 2]} | ${
    colSymbols[col3Position + 2]
  } |
   --------------`;
  return display;
}

function displayScore() {
  scoreDisplayElement = document.querySelector("h2");
  scoreDisplayElement.innerText = `Total Points: ${totalScore}`;
}

function getScore(col1, col2, col3, bet) {
  symbols = [
    colSymbols[col1.position + 1],
    colSymbols[col2.position + 1],
    colSymbols[col3.position + 1],
  ];
  let bellCount = 0;
  let watermelonCount = 0;
  let orangeCount = 0;
  let lemonCount = 0;
  let cherryCount = 0;
  let missCount = 0;

  symbols.forEach((symbol) => {
    switch (symbol) {
      case "🔔":
        bellCount++;
        break;
      case "🍉":
        watermelonCount++;
        break;
      case "🍊":
        orangeCount++;
        break;
      case "🍋":
        lemonCount++;
        break;
      case "🍒":
        cherryCount++;
        break;
      case "🚫":
        missCount++;
        break;
    }
  });

  fruitCount = watermelonCount + orangeCount + lemonCount + cherryCount;
  multiplier = 0;
  if (bet === 3) {
    multiplier = 1;
  } else if (bet === 10) {
    multiplier = 2;
  } else if (bet === 50) {
    multiplier = 10;
  } else if (bet === 100) {
    multiplier = 20;
  }

  if (bellCount === 3) {
    return [1000, multiplier];
  } else if (bellCount === 2) {
    return [100, multiplier];
  } else if (bellCount === 1) {
    return [10, multiplier];
  } else if (watermelonCount === 3) {
    return [10, multiplier];
  } else if (orangeCount === 3) {
    return [15, multiplier];
  } else if (lemonCount === 3) {
    return [20, multiplier];
  } else if (cherryCount === 3) {
    return [30, multiplier];
  } else if (fruitCount === 3) {
    return [5, multiplier];
  } else if (fruitCount === 2) {
    return [2, multiplier];
  } else if (fruitCount === 1) {
    return [1, multiplier];
  } else {
    return [0, multiplier];
  }
}

const initializeGame = () => {
  canStartRound = true;
  totalScore = startingBalance;
  displayScore();
  console.log(getDisplay(col1.position, col2.position, col3.position));
};

function playRound(bet) {
  canStartRound = false;
  totalScore -= bet;
  displayScore();
  const spinCol1 = setInterval(() => {
    col1.moveCol();
  }, 100);
  const spinCol2 = setInterval(() => {
    col2.moveCol();
  }, 100);
  const spinCol3 = setInterval(() => {
    col3.moveCol();
  }, 100);

  const displayBoard = setInterval(() => {
    console.clear();
    console.log(getDisplay(col1.position, col2.position, col3.position));
  }, 100);

  const stopColumnTimer = () =>
    new Promise((res) =>
      setTimeout(res, Math.floor(Math.random() * 1000 + 2000))
    );

  async function roundTimer() {
    await stopColumnTimer();
    clearInterval(spinCol1);
    await stopColumnTimer();
    clearInterval(spinCol2);
    await stopColumnTimer();
    clearInterval(spinCol3);
    clearInterval(displayBoard);
    const [baseScore, multiplier] = getScore(col1, col2, col3, bet);
    roundScore = baseScore * multiplier;
    totalScore += roundScore;
    displayScore();

    console.clear();
    console.log(getDisplay(col1.position, col2.position, col3.position));
    if (baseScore === 1000) {
      console.log("Jackpot!!!!!!");
    }
    console.log(
      `You bet ${bet} points and got a score of ${baseScore} x ${multiplier} for a combined score of ${roundScore}!\n Your Total Score is ${totalScore}.`
    );

    canStartRound = true;
  }

  roundTimer();
}

function startRound() {
  if (canStartRound) {
    const betAmount = Number(
      document.querySelector('input[name="bet"]:checked').value
    );
    if (totalScore >= betAmount) {
      playRound(betAmount);
    } else {
      alert(
        "On no, you don't have enough points to place that bet! Please select a lower bet or restart the game by refreshing the page."
      );
    }
  } else {
    alert(
      "Please wait until the current round is finished before trying to start a new round!"
    );
  }
}

const colSymbols = ["🍉", "🍉", "🍉", "🍉", "🍊", "🍊", "🍊", "🍋", "🍋", "🍒", "🚫","🔔", "🚫", "🍉", "🍉"];

const startingBalance = 100;
let totalScore = 0;
let canStartRound = true;

const col1 = new Column();
const col2 = new Column();
const col3 = new Column();

initializeGame();
