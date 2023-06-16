const jokes = require("give-me-a-joke");
const colors = require("colors");
const figlet = require("figlet");

// ? console.dir(jokes);
console.log(colors);

// Running ```node app.js`` in terminal shows that this package has four different methods that are exported from give-me-a-joke.
// The below function is from their docs and you see that a callback function is used.
jokes.getRandomDadJoke(function (joke) {
  // We add .rainbow to the joke call in order to use the colors package
  console.log(joke.rainbow);
});

figlet("Hello Bitches!!", function (err, data) {
  if (err) {
    console.log("Something went wrong");
    console.dir(err);
    return;
  }
  console.log(data.brightRed);
});
