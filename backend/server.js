// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("request");
// res.end("working");
// });

// server.listen(9999, () => {
//   console.log("asda");
// });

import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("working");
});
app.listen(9999, () => {
  console.log("server working");
});
