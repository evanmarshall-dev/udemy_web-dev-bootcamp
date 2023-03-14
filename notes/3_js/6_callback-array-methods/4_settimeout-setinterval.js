// Pass in two arguments for setTimeout. First can be anything like a function and second is the time delay in seconds.
// It will make more sense when we learn about asynchronous JavaScript.
setTimeout(() => {
  console.log("HELLO!!!!");
}, 3000);

// If you put code after the setTimeout function it will run that code immediately.

// EXAMPLE setInterval
// Below code will run forever unless clearInterval is called with the id argument.
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);
clearInterval(id);
