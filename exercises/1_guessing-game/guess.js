// STEP 1: create a prompt for user to enter max number and set to variable.
// This variable needs to be converted to number using parseInt.
let maximum = parseInt(prompt("Enter the maximum number"));

// Generate number from 1 - 10. Using Math.random multiplied by 10 and floor the whole thing with addition of 1.
// Multiplied by 10 makes it 0 to 10, Floor removes the decimal and add 1 to make it start at 1.
// Math.floor(Math.random() * 10) + 1;

// Issue arises which causes NaN.
// Method #1.
// If NOT maximum, which is set to number then set maximum variable to same prompt but new message warning.
// if (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number"));
// }

// Method #2.
// If statement doesn't prevent multiple inputs which are NaN so use a while loop.
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

// Set top end of variable to maximum variable above so that the random number goes from 1 to whatever is set in prompt.
const targetNum = Math.floor(Math.random() * maximum) + 1;
// Console log to test.
console.log(targetNum);

// STEP 2: Prompt user to enter a guess.
let guess = parseInt(prompt("Enter your first guess"));
// Keep track of number of attempts.
let attempts = 1;

// While guess is not equal to targetNum.
// Issue is comparing guess which is string to targetNum which is number so never will be equal. Therefore you can parseInt guess.
while (parseInt(guess) !== targetNum) {
  // Helps when large number is added.
  // This causes a problem below when we parseInt each guess in the while loop, because a number will never equal q so we can parseInt the above declaration in the while loop instead.
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high, enter a new guess:");
  } else {
    guess = prompt("Too low, enter a new guess:");
  }
}
// The below message will not make sense when q is entered therefore turn into an if statement.
if (guess === "q") {
  console.log("You quitter!");
} else {
  console.log(`YOU GOT IT! It took you ${attempts} guesses.`);
}
