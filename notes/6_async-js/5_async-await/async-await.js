// Async used before a function declaration signifies an async function and always returns a promise whether or not a promise is even specified.
// It will return as undefined unless something is returned within the async function.
// Below function declaration proves this.
// ? async function hello() {}

// Can also be done with arrow functions.
// ? const hello = async () => {};

// If something is returned in the async function the promise will be fulfilled based on that return.
// The below function will return with the value "LAJFNFEK"
const hello = async () => {
  return "LAJFNFEK";
};
// I can then chain on a .then.
hello().then((data) => {
  console.log("Promise resolved with:", data);
});
