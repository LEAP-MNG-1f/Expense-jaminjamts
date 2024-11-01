// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("request");
// res.end("working");
// });

// server.listen(9999, () => {
//   console.log("asda");
// });

import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, name: "bold", age: 45 },
  { id: 2, name: "Doe", age: 45 },
  { id: 3, name: "random", age: 45 },
];
app.get("/", (req, res) => {
  res.send("working");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const id = Math.floor(Math.random() * 100);
  if (!name || typeof name !== "string") {
    res.send("name aldaatai");
  }
  if (age == "" || typeof age !== "number") {
    res.send("age aldaatai");
  } else {
    users.push({ id: id, name, age });
  }
  res.send(users);
});

app.put("/users", (req, res) => {
  const { id, name, age } = req.body;
  const user = users.filter((data) => {
    if (data.id == id) {
      data.name = name;
      data.age = age;
    }
    return data;
  });

  res.send(user);
});

app.delete("/users", (req, res) => {
  const { id } = req.body;
  const deletedArray = users.filter((data) => data.id !== id);
  res.send(deletedArray);
});

app.listen(9999, () => {
  console.log("server working");
});
