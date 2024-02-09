const user = {
  firstName: "Mark",
  lastName: "Hill",
  city: "Eagle Mountain",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
  completeSemester: function (semesterKey) {
    this["semesters"][`${semesterKey}`] = "complete";
  },
};

user.completeSemester("semesterOne");
delete user.semesters.semesterFour;
user.favoriteLanguage =
  "Python (Sorry JS, there are things I like about you too though!)";

console.log(user);
