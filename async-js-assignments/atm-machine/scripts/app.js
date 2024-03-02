class User {
  constructor(firstName, lastName, email, password, balance = 0.0) {
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.email = email),
    (this.password = password),
    (this.balance = balance)
  }
}

class Atm {
  constructor(users, isLoggedIn = false, deposit = 0.0, withdraw = 0.0) {
    this.users = users,
    this.currentUser = null,
    this.isLoggedIn = isLoggedIn
    this.deposit = deposit,
    this.withdraw = withdraw
  }

  viewBalance() {
    alert(`Your balance is $${this.currentUser.balance}`);
  }

  depositCash() {
    const depositAmount = Number(prompt("How much would you like to deposit?"));
    if (typeof depositAmount === "number" && depositAmount > 0) {
      this.currentUser.balance += depositAmount;
      this.deposit += depositAmount;
      alert(`
      You have deposited $${depositAmount}
      Your new balance is $${this.currentUser.balance}
      `);
    } else {
      alert("Please enter a positive number");
    }
  }

  withdrawCash() {
    const withdrawAmount = Number(prompt("How much would you like to withdraw?"));
    if (typeof withdrawAmount === "number" && withdrawAmount > 0) {
      if (withdrawAmount <= this.currentUser.balance) {
        this.currentUser.balance -= withdrawAmount;
        this.withdraw += withdrawAmount;
        alert(`
        You have withdrawn $${withdrawAmount}
        Your new balance is $${this.currentUser.balance}
        `);
      } else {
        alert(`
        Your don't have $${withdrawAmount} in your account.
        Your current balance is $${this.currentUser.balance}`);
      }
    } else {
      alert("Please enter a positive number");
    }
  }

  displayReceipt() {
    alert(`
    Thanks for banking with us ${this.currentUser.firstName} ${this.currentUser.lastName}!
    You've deposited $${this.deposit}
    You've withdrawn $${this.withdraw}
  
    Your new balance is $${this.currentUser.balance}
     
    `);
  }

  menu() {
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
        atm.viewBalance();
      } else if (menuInput === "2") {
        atm.depositCash();
      } else if (menuInput === "3") {
        atm.withdrawCash();
      } else if (menuInput === "4") {
        atm.displayReceipt();
        return false;
      }
    }
  }

  login() {
    const email = prompt("Please enter your email");
    const password = prompt("Please enter your password");

    this.users.forEach(user => {
      if (email === user.email && password === user.password) {
        this.currentUser = user;
        this.isLoggedIn = true;
        this.menu();
        return
      }
    });

    if (!this.isLoggedIn) {
      alert("Invalid email or password");
    } else {
      this.isLoggedIn = false;
    }
  }
}

const mark = new User("Mark", "Hill", "mark@fake.com", "markpass");
const krystal = new User("Krystal", "Hill", "krystal@fake.com", "krystalpass");
const daxter = new User("Daxter", "Hill", "daxter@fake.com", "daxterpass");
const rune = new User("Rune", "Hill", "rune@fake.com", "runepass");
const users = [mark, krystal, daxter, rune]
const atm = new Atm(users)

const button = document.querySelector('button')
button.addEventListener("click", atm.login.bind(atm));