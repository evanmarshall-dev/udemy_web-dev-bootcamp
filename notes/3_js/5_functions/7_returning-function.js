// Returning value as a function within a function.
// EXAMPLE 1.
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    // Return a function.
    return function () {
      console.log("Congrats, I am a good function.");
      console.log("You will 5 bucks!");
    };
  }
  return function () {
    console.log("Your computer has been infected with a virus.");
    console.log("Stop trying to close this window!");
    console.log("Stop trying to close this window!");
    console.log("Stop trying to close this window!");
    console.log("Stop trying to close this window!");
    console.log("Stop trying to close this window!");
  };
}
const mystery = makeMysteryFunc();
mystery();

// EXAMPLE 2.
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
// When call makeBetweenFunc a new function will be returned which will test whether a value is between 5 and 10.
// makeBetweenFunc(5, 10);
// Below would be the function which will be made in the above function automatically.
// function isBetween(num) {
//     return num >= 5 && num <= 10;
// }
/* This returns ƒ (num) { return num >= min && num <= max;}, which can be saved to a variable. */
const isChild = makeBetweenFunc(0, 18);
isChild(4);
const isAdult = makeBetweenFunc(19, 64);
isAdult(5);
const isSenior = makeBetweenFunc(65, 120);
isSenior(67);
