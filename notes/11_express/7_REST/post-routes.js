// We are going to use EJS to use forms in our HTML for a user to interact with COMMENTS.
const express = require("express");
const path = require("path");

const app = express();

// The below req.body gets parsed due to the below two lines of code.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Set the view engine to EJS
app.set("view engine", "ejs");

// Now to fake comments using an array.
// There is no database so we will also CREATE comments and push into this array.
const comments = [
  {
    id: 1,
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: 2,
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: 3,
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: 4,
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

// Now to set base routes /comments.
// You pass through all comments from index using {comments}.
// * This is the READ portion of CRUD.
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// For CREATE we will need to create two routes. One to view the form (NEW route is what it is usually called) and one to SUBMIT the form as a POST request, processed and added into comments array..
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// * To read comments it uses a GET request to /comments and to create a comment it uses a POST request to /comments.
app.post("/comments", (req, res) => {
  // ? console.log(req.body);
  // destructure username and comment from req.body.
  const { username, comment } = req.body;
  // Add to the comments array by pushing in a new object which has username and comment.
  comments.push({ username, comment });
  // * After you submit data on the form you will see the username and comment when you go to /comments to run a new GET request or the READ route.
  // ? res.send("IT WORKED!");
  // Redirect to the READ route or index where all the comments are once you submit this post request.
  // * In the console > network you will see that we get a 302 status code which means that we are being redirected as well as a header location which is the location we are being redirected to (/comments) which is a GET request.
  res.redirect("/comments");
});

// TODO: Currently, when we submit our post request or CREATE route and refresh the page it will resubmit the form. We need to fix this. This happens because res.send("IT WORKED") is still on the page where the post request is so we send it again when we refresh the page. This can be fixed by creating a redirect. We will redirect users back to the READ route or index where all the comments are.

// Now onto the SHOW route which is the READ route for a single comment.
// We will hardcode IDs into the comments array and then use the ID to find the comment.
app.get("/comments/:id", (req, res) => {
  // Find ID in request parameters.
  const { id } = req.params;
  // ID will be a string so we need to parseInt it.
  const comment = comments.find((c) => c.id === parseInt(id));
  // Now to render a page.
  res.render("comments/show", { comment });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
