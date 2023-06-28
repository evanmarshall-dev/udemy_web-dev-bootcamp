const express = require("express");

const app = express();

// Run on every request no matter if it is get, post, put, etc. It is telling express to use the following middleware to parse the body of the request as url encoded FORM data.
app.use(express.urlencoded({ extended: true }));
// If we want to parse for another data type such as JSON we would use the following:
app.use(express.json());

// Add get route.
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

// Add post route.
app.post("/tacos", (req, res) => {
  // In a post request the req object also includes a req.body property.
  // ? console.log(req.body); // Comes back undefined as the default value.
  const { meat, qty } = req.body;
  // We need to tell express to parse the body of the request (form). See above app.use(express.urlencoded({ extended: true })).
  // The following code outputs to the page.
  res.send(`Ok, here are your ${qty} ${meat} taco(s)`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
