
const express = require("express");
const app = express();
const jsonData = require("./data.json");

var users = jsonData.users;
app.use(express.json());

users.push(
  { id: 404, firstName: "sita", lastName: "verma", age: 30, gender: "Male" },
  { id: 550, firstName: "shyam", lastName: "patel", age: 25, gender: "Female" }
);

app.get("/api/data", (req, res) => {
  const firstName = req.query.name;
  const age = parseInt(req.query.age);
  const gender = req.query.gender;
  const id = parseInt(req.query.id);

  let filteredData = users;
  if (firstName) {
    filteredData = filteredData.filter((item) =>
      item.firstName.toLowerCase().startsWith(firstName.toLowerCase())
    );
  }
  if (gender) {
    filteredData = filteredData.filter((item) =>
      item.gender.toLowerCase().startsWith(gender.toLowerCase())
    );
  }

  if (!isNaN(age)) {
    filteredData = filteredData.filter((item) => item.age === age);
  }
  if (!isNaN(id)) {
    filteredData = filteredData.filter((item) => item.id === id);
  }

  res.json({ filteredData });
});

app.get("/api/users", (req, res) => {
  res.json({ users });
});

app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/api/users", (req, res) => {
  const newUser = req.body; 
  users.push(newUser);

  res.json({ message: "User added successfully", newUser });
});

app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body; 
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    
    users[userIndex] = { ...users[userIndex], ...updatedUser };

    res.json({ message: "User updated successfully", updatedUser });
  } else {
   
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/test", (req, res) => {
  res.send({done :1})
})

app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
   
    const deletedUser = users.splice(userIndex, 1)[0];

    res.json({ message: "User deleted successfully", deletedUser });
  } else {
    
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


















































































// const express = require("express");
// const app = express();
// const jsonData = require("./data.json");

// var users = jsonData.users;
// app.use(express.json());

// users.push(
//   { id: 404, firstName: "sita", lastName: "verma", age: 30, gender: "Male" },
//   { id: 550, firstName: "shyam", lastName: "patel", age: 25, gender: "Female" }
// );

// app.get("/api/data", (req, res) => {
//   const firstName = req.query.name;
//   const age = parseInt(req.query.age);
//   const gender = req.query.gender;
//   const id = parseInt(req.query.id);

//   let filteredData = users;
//   if (firstName) {
//     filteredData = filteredData.filter((item) =>
//       item.firstName.toLowerCase().startsWith(firstName.toLowerCase())
//     );
//   }
//   if (gender) {
//     filteredData = filteredData.filter((item) =>
//       item.gender.toLowerCase().startsWith(gender.toLowerCase())
//     );
//   }

//   if (!isNaN(age)) {
//     filteredData = filteredData.filter((item) => item.age === age); 
//   }
//   if (!isNaN(id)) {
//     filteredData = filteredData.filter((item) => item.id === id);
//   }

//   res.json({ filteredData });
// });

// app.get("/api/users", (req, res) => {
//   res.json({ users });
// });

// app.post("/api/users", (req, res) => {
//   const newUser = req.body; // Assuming the request body contains the new user data

//   // Add the new user to the users array
//   users.push(newUser);

//   res.json({ message: "User added successfully", newUser });
// });

// app.put("/api/users/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const updatedUser = req.body; // Assuming the request body contains the updated user data

//   // Find the index of the user with the specified id in the users array
//   const userIndex = users.findIndex((user) => user.id === userId);

//   if (userIndex !== -1) {
//     // If the user is found, update the user object with the new data
//     users[userIndex] = { ...users[userIndex], ...updatedUser };

//     res.json({ message: "User updated successfully", updatedUser });
//   } else {
//     // If the user is not found, send an error response
//     res.status(404).json({ message: "User not found" });
//   }
// });



// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

