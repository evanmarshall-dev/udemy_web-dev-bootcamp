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
console.log(add(9, 4));
// If I try to define function call in a variable we get undefined. This is because console.log does not create a value which can be captured in JS. The value is not saved.
// This issue is solved by using the RETURN keyword. This exports the value outside of the function. The RETURN keyword also STOPS the execution of the function. However a return can be put inside a conditional like above and the function only terminates once the condition is met. For the above code you do not need an else statement because the second part of the code only runs if the first set of code is false. You can only return one value.
// const total = add(10, 3);
// console.log(total);

// EXERCISE: LAST ELEMENT
// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
function lastElement(array) {
  if (array.length === 0) {
    return null;
  }
  return array[array.length - 1];
}
console.log(lastElement([1, 5, 7, 9]));

// EXERCISE: CAPITALIZE.
// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.
// Single out the first letter and capitalize it. (use a string method to help!)
// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)
// STEP 1: We need to separate the first character of the input string capitalize it and add the rest of the string to that capitalized letter and return that.
// STEP 2: So in the below code, we extract the first letter of the passed string by slicing it at position 0. (Slice method takes two inputs start and end positions we want to slice. the sliced string starts from the start position mentioned to the character before the end position mentioned.)
// STEP 3: After extracting the first letter , we capitalize it with toUpperCase method and the we have to add the rest of the string. To get the rest of the string we again use the slice method. (When Slice method is used with only one argument it returns the string from the given position to the end.)
// STEP 4: So now we return the string formed by adding both the first Letter and the rest of the string.
function capitalize(str) {
  const firstLetter = str.slice(0, 1).toUpperCase();
  const restStr = str.slice(1);
  return firstLetter + restStr;
}
console.log(capitalize("halloween"));

// EXERCISE: SUM ARRAY
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.
// You'll need a variable to keep track of the total.  It should start out as zero.
// Loop over the array and for each element, add it to the total variable.
// After you have added every number to total, return total.
function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}
console.log(sumArray([2, 6, 8, 3]));

// EXERCISE: DAYS OF THE WEEK
// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
// Store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.
function returnDay(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = days[num - 1];
  return day || null;
}
console.log(returnDay(8));
