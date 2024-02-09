const hobbit = {
  id: 1,
  profile: {
    name: {
      first: "Bilbo",
      last: "Baggins",
    },
    address: "Bag End",
    city: "Hobbiton",
    state: "The Shire",
    age: 111,
    dob: "09/29/2890",
  },
  gradesCompleted: ["K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  deleteMe: true,
  logSelf: function () {
    fullName = this.profile.name.first + " " + this.profile.name.last;
    gradesString = this.gradesCompleted.join(", ");
    console.log(
      `Hobbit ${this.id}, ${fullName}, has completed grades ${gradesString}.`
    );
    console.log(
      `${fullName} lives at ${this.profile.address}, ${this.profile.city}, ${this.profile.state}.`
    );
    console.log(
      `He was born ${this.profile.dob}, and is currently ${this.profile.age} years old.`
    );
  },
};

hobbit.logSelf();
console.log(hobbit);
delete hobbit.deleteMe;
console.log(hobbit);
