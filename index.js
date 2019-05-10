// Import packages
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index.routes"));

// First route
app.get("/", (req, res) => {
  res.json({ message: "Hello! Welcome to quiz application" });
});

// Starting server
app.listen("5000");
