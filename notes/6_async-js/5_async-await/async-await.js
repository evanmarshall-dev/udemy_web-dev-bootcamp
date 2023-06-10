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

// ? const login = async (username, password) => {
//   if (!username || !password) throw "Missing credentials";
//   if (password === "corgifeetarecute") return "Welcome!";
//   throw "Invalid password";
// };

// login("ddwnklffwf", "corgifeetarecute")
//   .then((msg) => {
//     console.log("Logged in");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

// * AWAIT
// ? const rainbowColor = (color, delay) => {
//   // ? return new Promise((resolve, reject) => {
//   // Removed reject to pass linting.
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// ? rainbowColor("red", 1000)
//   .then(() => rainbowColor("orange", 1000))
//   .then(() => rainbowColor("yellow", 1000))
//   .then(() => rainbowColor("green", 1000))
//   .then(() => rainbowColor("blue", 1000))
//   .then(() => rainbowColor("indigo", 1000))
//   .then(() => rainbowColor("violet", 1000));

// ? async function rainbow() {
//   // Without await keyword only orange would happen because code is run at the same time. Things will just pause until the first promise (red color) is resolved in a second.
//   // You can simply keep adding await.
//   await rainbowColor("red", 1000);
//   // The console.log will only execute after the first await.
//   // console.log("Hi");
//   await rainbowColor("orange", 1000);
//   await rainbowColor("yellow", 1000);
//   await rainbowColor("green", 1000);
//   await rainbowColor("blue", 1000);
//   await rainbowColor("indigo", 1000);
//   await rainbowColor("violet", 1000);
//   // Return to make a resolved promise.
//   return "All done!!!!";
// }

// ? rainbow().then(() => {
//   console.log("End of rainbow.");
// });

// OR

// ? async function printRainbow() {
//   // Common to store result in variable.
//   const data1 = await rainbow();
//   // Prints the return value of rainbow() to the console.
//   console.log(data1);
// }

// ? printRainbow();

// * Handling Async Errors

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Your fake request's connection timed out :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  // It is only stored in a variable when resolved. When error is thrown it is not a real error and problematic when code is run after i.e. console.log(data1) because the execution of code stops prior to more code.
  // This issue can be resolved using try/catch.
  try {
    const data1 = await fakeRequestPromise("/page1");
    console.log(data1);
    const data2 = await fakeRequestPromise("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Caught an error!!");
    console.log("Error is:", e);
  }
}

makeTwoRequests();
