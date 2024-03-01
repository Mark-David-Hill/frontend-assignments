class User {
  constructor(firstName, lastName, email, password, balance = 0.0, deposit = 0.0, withdraw = 0.0) {
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.email = email),
    (this.password = password),
    (this.balance = balance),
    (this.deposit = deposit),
    (this.withdraw = withdraw);
  }
}

function viewBalance() {
  alert(`Your balance is $${mark.balance}`);
}

function depositCash() {
  const depositAmount = Number(prompt("How much would you like to deposit?"));
  if (typeof depositAmount === "number" && depositAmount > 0) {
    mark.balance += depositAmount;
    mark.deposit += depositAmount;
    alert(`
    You have deposited $${depositAmount}
    Your new balance is $${mark.balance}
    `);
  } else {
    alert("Please enter a positive number");
  }
}

function withdrawCash() {
  const withdrawAmount = Number(prompt("How much would you like to withdraw?"));
  if (typeof withdrawAmount === "number" && withdrawAmount > 0) {
    if (withdrawAmount <= mark.balance) {
      mark.balance -= withdrawAmount;
      mark.withdraw += withdrawAmount;
      alert(`
      You have withdrawn $${withdrawAmount}
      Your new balance is $${mark.balance}
      `);
    } else {
      alert(`
      Your don't have $${withdrawAmount} in your account.
      Your current balance is $${mark.balance}`);
    }
  } else {
    alert("Please enter a positive number");
  }
}

function receiptAmount() {
  alert(`
  Thanks for banking with us ${mark.firstName} ${mark.lastName}!
  You've deposited $${mark.deposit}
  You've withdrawn $${mark.withdraw}

  Your new balance is $${mark.balance}
   
  `);
}

function menu() {
  while (true) {
    const menuInput = prompt(`
    [1] View Balance
    [2] Deposit Money
    [3] Withdraw Money
    [4] Quit (or Cancel)
    `);

    if (menuInput === null) {
      return;
    } else if (menuInput === "1") {
      viewBalance();
    } else if (menuInput === "2") {
      depositCash();
    } else if (menuInput === "3") {
      withdrawCash();
    } else if (menuInput === "4") {
      receiptAmount();
      return false;
    }
  }
}

function login() {
  const email = prompt("Please enter your email");
  const password = prompt("Please enter your password");

  if (email === mark.email && password === mark.password) {
    menu();
  } else {
    alert("Invalid email or password");
  }
}

const mark = new User("Mark", "Hill", "mark@fake.com", "1234");
