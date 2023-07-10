const mongoose = require("mongoose");

// After the slash is the name of the database.
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  // Error handling is better with .catch() than with a second argument to .connect().
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Oh no! Error!");
    console.log(err);
  });
