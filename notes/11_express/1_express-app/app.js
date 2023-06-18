// Mainly we are trying to get a server running.
// First thing is to import the express package.
const express = require("express");
// Execute express and save in a variable.
const app = express();
// console.dir will show that the app object has a lot of methods on it (i.e. route, param, enabled, copy, delete, get post and disabled). All of it makes up an express application.
// ? console.dir(app);
// The goal is to get an incoming request give an outgoing response.
// Anytime we have an incoming request, the following .use will be run.
// Express creates two objects automatically which .use accepts as two parameters, the first is the request and second is the response.
// ? app.use((req, res) => {
// ? console.log("We got a new request");
// The below console.dir will show a massive object. Originally the request is a text-like object not native to any language and express converts it into an object made up of arrays, objects, constructors and URLs.
// * Express creates a JavaScript object by parsing the HTTP request info and passes that in as the first argument to the .use callback function.
// ? console.dir(req);
// RESPONSE accepts some methods such as res.send, res.json, res.redirect, res.sendFile, res.end.
// res.send() sends the HTTP response to the client. We can respond with a string or an object, which creates JSON.
// ? res.send("Hello, we got your request! This is a response.");
// Instead of sending a string, we can also send an object.
// ? res.send({
//   ? message: "Hello, we got your request! This is a response.",
// ? });
// You can look up the request in POSTMAN and easily see the headers section showing that express sets Content-Type to application/json.
// You can also respond with a string which contains HTML, which renders in the browser.
// We will have to comment out res.send() in order to demonstrate routing because once res.send() is called, we are done with out HTTP requests.
// ? res.send("<h1>This is my webpage!</h1>");
// ? });

// Let's add the home or ROOT route
app.get("/", (req, res) => {
  // ? console.log("ROOT request!!");
  res.send("This is my homepage!");
});

// One of apps methods is app.get(). This method expects two parameters: the path that we are matching and then a callback function which will run whenever a request comes in matching cats or the path.
// You can also call different methods on the app object such as .post() and.get(), but .get() is the only method we can demo in the browser. POST would have to be tested in something such as POSTMAN.
app.get("/cats", (req, res) => {
  // ? console.log("CAT request!!");
  res.send("meow");
});

// Now for another route.
app.get("/dogs", (req, res) => {
  // ? console.log("DOG request!!");
  res.send("woof");
});

// If you go to a path or route that doesn't exist, you will get a 404. We can create a generic response for this.
// * Make sure you put * or 404 route in the last position because they are matched in the order they are listed. If this was positioned before any of the other routes, you would get a 404 when going to the routes after the * 404. This only applies to .get() requests.
app.get("*", (req, res) => {
  // ? console.log("404 request!!");
  res.status(404).send("404 Path/Page Not Found");
});

// We are now going to start using ROUTING. It is not specific to express and refers to taking incoming requests and path and matching to some code and response (i.e. path could be http://localhost:3000/search).
// Below are example paths.
// * /cats => 'meow'
// * /dogs => 'woof'
// * /

// We now need to listen for requests and then send a request to the server.
// We are only using this locally so we are using the port 3000 and localhost. Right now we will get an error: Cannot GET /.
// You can change the port to something else like 8080 and you would need to do this if you had separate express apps/servers running.
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
