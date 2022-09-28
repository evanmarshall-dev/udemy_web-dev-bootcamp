// Try/Catch helps you catch errors and stop it from breaking the code.
// EXAMPLE.
// hello.toUpperCase();
// Hello does not exist so the console states an uncaught error.
// Resolve this by wrapping in a try and catch block.
try {
  //   hello.toUpperCase();
} catch {
  console.log("ERROR!!!");
}
// Below console proves that the above code still runs or else it would not log AFTER to the console.
console.log("AFTER");
// Try/Catch become very important in AJAX and async functions.

// EXAMPLE 2.
// You can use it as a method for incorrect type being added to a function.
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    // We have access to console error "e" in this function.
    console.log(e);
    console.log("Please pass in a string");
  }
}
yell("YAAAAAAA");
yell(333);
