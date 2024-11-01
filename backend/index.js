import express from "express";
import bodyParser from "body-parser";

const server = express();
const port = 8888;
server.use(bodyParser.json());

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Alex", age: 28 },
];

server.get("/", (_, res) => {
  res.send("asd");
});

server.get("/users", (_, res) => {
  res.send(users);
});

server.post("/users", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.send("name or age not input");
  } else {
    if (typeof name !== "string") {
      return res.send("name was only letter");
    }
    if (typeof age !== "number") {
      return res.send("age was only number");
    }
    const id = users.length + 1;
    const newUser = { id: id, name: name, age: age };
    users.push(newUser);
    res.send(users);
  }
});
server.put("/users", (req, res) => {
  const { id, name, age } = req.body;
  if (!name || !age) {
    return res.send("solih utgaa oruulna uu");
  }
  if (typeof name !== "string" || typeof age !== "number") {
    return res.send("name zuwhun useg bolon nas zuwhun too awna");
  }
  users.filter((data) => {
    if (data.id == id) {
      data.name = name;
      data.age = age;
    }
  });
  res.send(users);
});

server.delete("/users", (req, res) => {
  const { id } = req.body;
  const updatedArray = users.filter((user) => user.id !== id);

  res.send(updatedArray);
});

server.listen(port);
