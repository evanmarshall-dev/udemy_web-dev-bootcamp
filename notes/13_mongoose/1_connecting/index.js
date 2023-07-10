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

// * Define the schema for movies and it will be used to set the keys in the mongo document.
// Permitted SchemaTypes are String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, and Schema.
// This below definition has nothing to do with the database. It's just a schema for the JS object.
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// Take this schema and tell mongoose to make a model out of it.
// Pass in a string containing name of the model and the schema to mongoose.model().
// The string passed in needs to be singular and capitalized.
// Mongoose will take the string and create a collection for use called movies (pluralized and lowercase).
// Save everything below to a variable (usually same name as the string) and this becomes the class. This is a model class called "Movie".
// This still has nothing to do with the database yet, but we can use this class to make new instances of movies and save to the database.
const Movie = mongoose.model("Movie", movieSchema);

// * Create a new instance of the Movie class.
// Still does nothing with the database, yet.
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
