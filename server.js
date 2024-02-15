// server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

app.get("/api/*", (req, res) => {
  const filePath = path.join(__dirname, "src/example", req.params[0] + ".tsx");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server Error");
    } else {
      res.send(data);
    }
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
