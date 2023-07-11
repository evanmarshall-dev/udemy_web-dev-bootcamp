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
// ? const amadeus = new Movie({
//   ? title: "Amadeus",
//   ? year: 1986,
//   ? score: 9.2,
//   ? rating: "R",
// ? });

// Insert multiple. Not common to insert many. Usually one user creates entry one time.
// The below code will take some time to insert so we will need to work with callbacks. InsertMany returns a promise.
// We do not have to call save() on each instance. InsertMany will do that for us. InsertMany is a model method.
// ? Movie.insertMany([
//   ? { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   ? { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//   ? { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   ? { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//   ? { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ? ]).then((data) => {
//   ? console.log("It worked!");
//   ? console.log(data);
// ? });

// * FIND methods.
// There are many find methods. Find, findById, findOne, etc.
// It is recommended to treat what is returned by find LIKE a promise. It is not actually a promise, rather a Mongoose query object. There is a .then method, but they are not full fledged promises, but rather thenables.
// Typing in Movie.find() will return a QUERY object, but this is not the data we want. One way we can get the data we want is to use .then(). For example: Movie.find({}).then(data => console.log(data)).
// You can specify what you want to find by passing in an object to the find method. For example: Movie.find({year: 1986}).then(data => console.log(data)).
// You can be even more specific and pass in greater than operators for example. For example: Movie.find({year: {$gte: 1986}}).then(data => console.log(data)).
// * You can use .exec() to turn the query into a promise. For example: Movie.find({year: {$gte: 1986}}).exec().then(data => console.log(data)). This gives us a better stacked trace which is better for error tracking.
// FindByID is commonly used especially when working with Express. For example: Movie.findById("5f9b1b0b9b0b3b1b9b0b3b1b").then(data => console.log(data)).
