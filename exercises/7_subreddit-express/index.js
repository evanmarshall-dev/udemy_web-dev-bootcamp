const express = require("express");
const path = require("path");
const redditData = require("./data.json");

// ? console.log(redditData);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cats", (req, res) => {
  const cats = ["Blue", "Monty", "Rocket", "Stephanie", "Winston"];
  res.render("cats", { cats });
});
// Use the following subreddit against the above redditData. Plug req.params into redditData.
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  // ? console.log(data);
  // If no data then error handle.
  if (data) {
    // Spread the data into the object that will be passed to the template. This allows access individual properties instead of passing the whole object. We can use these properties in our template.
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", {
      subreddit,
    });
  }
});
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
