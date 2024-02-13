console.log("\nChallenge 9 Start:\n\n");

const user = {
  userName: "mark",
  activeStatus: "away",
};

const activate = (userToActivate) => {
  userToActivate.activeStatus = "active";
  return `${userToActivate.userName} is ${userToActivate.activeStatus}`;
};

console.log(activate(user));
