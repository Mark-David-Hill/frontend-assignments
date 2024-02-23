const colSymbols = [
  "🍉",
  "🍉",
  "🍉",
  "🍉",
  "🍊",
  "🍊",
  "🍊",
  "🍋",
  "🍋",
  "🍒",
  "🚫",
  "🔔",
  "🚫",
  "🍉",
  "🍉",
];

let startingBalance = 10;
let totalScore = 0;

class Column {
  constructor(position) {
    this.position = position;
  }
  moveCol() {
    this.position < colSymbols.length - 3
      ? (this.position += 1)
      : (this.position = 0);
  }
}

const col1 = new Column(Math.floor(Math.random() * colSymbols.length));
const col2 = new Column(Math.floor(Math.random() * colSymbols.length));
const col3 = new Column(Math.floor(Math.random() * colSymbols.length));

function getDisplay(col1Position, col2Position, col3Position) {
  let display = `
 ______________
| ${colSymbols[col1Position]} | ${colSymbols[col2Position]} | ${
    colSymbols[col3Position]
  } |
| ${colSymbols[col1Position + 1]} | ${colSymbols[col2Position + 1]} | ${
    colSymbols[col3Position + 1]
  } |<-
| ${colSymbols[col1Position + 2]} | ${colSymbols[col2Position + 2]} | ${
    colSymbols[col3Position + 2]
  } |
 --------------`;
  return display;
}

function getScore(col1, col2, col3) {
  symbols = [
    colSymbols[col1.position + 1],
    colSymbols[col2.position + 1],
    colSymbols[col3.position + 1],
  ];
  let score = 0;
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

  if (bellCount === 3) {
    return 1000;
  } else if (bellCount === 2) {
    return 100;
  } else if (bellCount === 1) {
    return 10;
  } else if (watermelonCount === 3) {
    return 10;
  } else if (orangeCount === 3) {
    return 15;
  } else if (lemonCount === 3) {
    return 20;
  } else if (cherryCount === 3) {
    return 30;
  } else if (fruitCount === 3) {
    return 5;
  } else if (fruitCount === 2) {
    return 2;
  } else if (fruitCount === 1) {
    return 1;
  } else {
    return 0;
  }
}

function spinColumn(column) {
  setInterval(() => {
    column.moveCol();
  }, 100);
}

const initializeGame = () => {
  totalScore = startingBalance;
};

function playRound() {
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

  setTimeout(
    () => clearInterval(spinCol1),
    Math.floor(Math.random() * 2000 + 3000)
  );
  setTimeout(
    () => clearInterval(spinCol2),
    Math.floor(Math.random() * 3000 + 4000)
  );
  setTimeout(
    () => {
      clearInterval(spinCol3);
      clearInterval(displayBoard);
      const score = getScore(col1, col2, col3);
      totalScore += score;

      console.clear();
      console.log(getDisplay(col1.position, col2.position, col3.position));
      console.log(
        `You got a score of ${score}!\n Your Total Score is ${totalScore}.`
      );
    },

    Math.floor(Math.random() * 4000 + 5000)
  );
}

initializeGame();
playRound();
