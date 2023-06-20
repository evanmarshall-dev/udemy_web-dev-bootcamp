const express = require("express");
const path = require("path");

const app = express();

// Now to tell the app to use EJS.
// app.set accepts to arguments (the key and the value). For EJS we will use the key of view engine and value of ejs.
// We do not have to require the EJS package because the app.set() method and express will automatically use it.
// Express expects templates to be in the views folder.
app.set("view engine", "ejs");

// * In order for express to work and see views directory, you need to run nodemon within the project folder. You cannot go out a few levels and run it from within the project folder.
// You can fix this by setting the views folder. Use a node module called PATH (path.join) and app.set() method.
// __dirname refers to whichever file you are in (index.js) is located.
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // Now that we have home.ejs in views folder we can send back a file rather than a string. The method used for this is called render().
  // ? res.send("Hello World");
  // You do not need to render /views/home.ejs because it is in the views folder so express will look for it.
  res.render("home");
});

// Let's test out looping.
app.get("/cats", (req, res) => {
  // Create array to pretend we are getting data from a database.
  const cats = ["Blue", "Monty", "Rocket", "Stephanie", "Winston"];
  res.render("cats", { cats });
});

// Create a route that is reddit-like.
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

// Define a random route as well as test out conditionals.
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // You can pass a second argument to render() method, which is an object.
  // Num will be available in the template under the name rand. It is being past into the template via the object. You can name num key anything you want. It does not have to be rand.
  // ? res.render("random", { rand: num });
  // Or you can pass it in so key and value are the same so just num.
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
