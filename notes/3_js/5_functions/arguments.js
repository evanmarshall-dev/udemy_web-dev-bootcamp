// Basic functions accept "zero inputs" or empty brackets therefore have the same behavior every time.
// Functions which accept inputs have different behaviors. These inputs are called arguments.
// Arguments have already been used in methods such as indexOf(3) and .push(4) and console.log('Hello'), etc.
// The value when added inside brackets is called the parameter, which holds the value of the argument which will be passed in.
// EXAMPLE #1.
function greet(firstName) {
  console.log(`Hey there, ${firstName}!`);
}
greet("Elvis");

// EXAMPLE EXERCISE.
// Create function called rant, which when called will print to the console: "I hate Beets" three times in all uppercase.
function rant(message) {
  for (let i = 0; i < 3; i += 1) {
    console.log(message.toUpperCase());
  }
}
rant("I hate beets");

// MULTIPLE ARGUMENTS.
// When inputting an argument the ORDER matters.
function newGreet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
newGreet("James", "Bond");
