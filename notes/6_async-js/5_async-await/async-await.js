// Async used before a function declaration signifies an async function and always returns a promise whether or not a promise is even specified.
// It will return as undefined unless something is returned within the async function.
// Below function declaration proves this.
// ? async function hello() {}

// Can also be done with arrow functions.
// ? const hello = async () => {};

// If something is returned in the async function the promise will be fulfilled based on that return.
// The below function will return with the value "LAJFNFEK"
// We reject a promise by throwing in an error inside an async function. This can be achieved by a syntax error or throw new Error("This is an error").
// Therefore if the async function gives a value the promise succeeds and if it is an error the promise is rejected.
// ? const hello = async () => {
//   // Example error.
//   throw new Error("Oopsie daisy... that is an error!");
//   // return "LAJFNFEK";
// };
// // I can then chain on a .then.
// hello()
//   .then((data) => {
//     console.log("Promise resolved with:", data);
//   })
//   .catch((err) => {
//     console.log("Oh no, promise rejected!");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing credentials";
  if (password === "corgifeetarecute") return "Welcome!";
  throw "Invalid password";
};

login("ddwnklffwf", "corgifeetarecute")
  .then((msg) => {
    console.log("Logged in");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
