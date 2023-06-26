const express = require("express");

const app = express();

// Add get route.
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

// Add post route.
app.post("/tacos", (req, res) => {
  res.send("POST request to /tacos");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
