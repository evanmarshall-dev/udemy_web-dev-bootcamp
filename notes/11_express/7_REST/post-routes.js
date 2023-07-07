// We are going to use EJS to use forms in our HTML for a user to interact with COMMENTS.
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
// Below v4: uuid is destructuring uuid from the uuid package to get a new name of uuid.
const { v4: uuid } = require("uuid");

const app = express();

// The below req.body gets parsed due to the below two lines of code.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// _method is the string we are looking for in the query string.
app.use(methodOverride("_method"));
// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Set the view engine to EJS
app.set("view engine", "ejs");

// Now to fake comments using an array.
// There is no database so we will also CREATE comments and push into this array.
let comments = [
  {
    // id: 1,
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    // id: 2,
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    // id: 3,
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    // id: 4,
    id: uuid(),
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

// * For CREATE we will need to create two routes. One to view the form (NEW route is what it is usually called) and one to SUBMIT the form as a POST request, processed and added into comments array..
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// * To read comments it uses a GET request to /comments and to create a comment it uses a POST request to /comments.
// TODO: We are not making IDs for the new comments created after the original 4. It is tricky because we are faking the IDs in an array. We will need to use a package called uuid to create unique IDs for each comment.
app.post("/comments", (req, res) => {
  // ? console.log(req.body);
  // destructure username and comment from req.body.
  const { username, comment } = req.body;
  // Add to the comments array by pushing in a new object which has username and comment.
  comments.push({ username, comment, id: uuid() });
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
  // ! We do not want to call parseInt anymore because we are using uuid, which does not provide an integer.
  // const comment = comments.find((c) => c.id === parseInt(id));
  const comment = comments.find((c) => c.id === id);
  // Now to render a page.
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === req.params.id);
  // Render a form.
  // Destructuring comment will give us access to comment object to prefill the form.
  res.render("comments/edit", { comment });
});

// PUT request changes the whole thing, such as the whole comment, whereas a PATCH request changes a part of it, such as the username or comment.
// * This is the UPDATE portion of CRUD.
app.patch("/comments/:id", (req, res) => {
  // res.send("PATCH!!!");
  // If we want to update a comment we take the ID, find the comment we currently have and then update the comment based on some payload sent in the request body. Having a req.body is similar to a POST request.
  // Taking ID from URL.
  const { id } = req.params;
  // Taking whatever was sent in the request body (payload).
  const newCommentText = req.body.comment;
  // Find comment based on ID.
  const foundComment = comments.find((c) => c.id === id);
  // Update comment property to be whatever was in the req.body.comment above.
  foundComment.comment = newCommentText;
  // We do not want respond with content from a patch route similar to a post route. We want to redirect to the index or /comments.
  res.redirect("/comments");
});

// * This is the DELETE portion of CRUD.
app.delete("/comments/:id", (req, res) => {
  // We want to lookup by the id and remove the entire comment (newCommentText from above).
  const { id } = req.params;
  // ? const foundComment = comments.find((c) => c.id === id);
  // Now we want to remove the foundComment from the comments array. This can be done by using the array method filter.
  // Filter is a boolean (true / false) and whichever items return true will be added to the filter.
  // We want every element that does NOT have the above ID.
  // * It is better not to mutate the original array so we will create a new array with all the comments that do not have the ID. Below returns a new array.
  comments = comments.filter((c) => c.id !== id);
  // After deleting the comment we want to redirect to the index or /comments.
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
