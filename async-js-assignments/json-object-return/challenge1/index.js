const userData = {
  result: {
    users: [
      {
        id: 1,
        name: "Mark",
        email: "mark@fake.com",
        password: "mark_pass",
      },
      {
        id: 1,
        name: "Krystal",
        email: "krystal@fake.com",
        password: "krystal_pass",
      },
      {
        id: 1,
        name: "Daxter",
        email: "daxter@fake.com",
        password: "daxter_pass",
      },
    ],
  },
};

userData.result.users.forEach((user) => {
  console.log(`Hello, ${user.name}, your email is ${user.email}`);
});
