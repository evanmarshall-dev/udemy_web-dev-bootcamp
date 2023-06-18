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
app.use((req, res) => {
  console.log("We got a new request");
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
  res.send("<h1>This is my webpage!</h1>");
});
// We now need to listen for requests and then send a request to the server.
// We are only using this locally so we are using the port 3000 and localhost. Right now we will get an error: Cannot GET /.
// You can change the port to something else like 8080 and you would need to do this if you had separate express apps/servers running.
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
// The above code sends a request then the requester or browser is waiting for a response.
