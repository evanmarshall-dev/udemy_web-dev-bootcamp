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

// EXAMPLE #2.
// The below function will take two arguments and concatenate the str parameter numTimes.
// Start with empty string assigned to result variable, loop through code inside loop which adds to result string whatever we put as str argument. This loops through as many times until we reach value of numTimes.
// Log the result to print value of function to console.
function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i += 1) {
    // console.log("HI");
    result += str;
  }
  console.log(result);
}
repeat("$", 5);

// You can ignore arguments unless they show up in the code block or used in some way. For example, the above function newGreet you could ignore firstName or lastName, but would come back undefined due to them both being used in the console.log code inside the function.

// RETURN.
function add(a, b) {
  // console.log(a + b);
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  const sum = a + b;
  return sum;
}
add(9, 4);
// If I try to define function call in a variable we get undefined. This is because console.log does not create a value which can be captured in JS. The value is not saved.
// This issue is solved by using the RETURN keyword. This exports the value outside of the function. The RETURN keyword also STOPS the execution of the function. However a return can be put inside a conditional like above and the function only terminates once the condition is met. For the above code you do not need an else statement because the second part of the code only runs if the first set of code is false. You can only return one value.
// const total = add(10, 3);
// console.log(total);
