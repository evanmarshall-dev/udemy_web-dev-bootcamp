// FUNCTION SCOPE.
// EXAMPLE.
let totalEggs = 0;
function collectEggs() {
  // variables defined in function are scoped to the function.
  totalEggs = 6;
  //   console.log(totalEggs);
}
console.log(totalEggs);
collectEggs();
// Therefore even if function is called we do not have access to the variable outside the function it is defined in.
console.log(totalEggs);
// Need to use let keyword to define variable outside function so that we can redefine it inside.
// In this example the 0 will be called first then the log after the function is called will run 6.
//! NOT COMMON to redefine global variables inside a function. It is common practice to define own variables inside function.

// EXAMPLE 2.
// define variable globally and define another variable local to function with same name.
const bird = "Eagle";
function birdWatch() {
  //   const bird = "Hawk";
  console.log(bird);
}
birdWatch();
console.log(bird);
// variable scoped to function. So the log inside will call Hawk and one outside will call Eagle. If we leave the log inside function and remove variable inside function JS will look for next closest variable which would be Eagle.

// BLOCK SCOPE
const radius = 8;
if (radius > 0) {
  //   const PI = 3.1415926;
  //   const msg = "Hi!";
}
// radius will be called but not PI nor msg even though this is not a function.
// This is because these variables (PI and msg) are scoped to the code BLOCK inside the conditional.
// Same applies to loops.
console.log(radius);
// console.log(PI);

// When using the "var" keyword to define variables instead of "const" or "let" they are scoped to the function, not the block.
// Therefore, if we changed the above to "var" then "PI" and "msg" could be called outside the block.
//! VARS are function scoped and not block scoped. LET and CONST are block scoped.

// LEXICAL SCOPE.
// EXAMPLE 1.
function bankRobbery() {
  const heroes = ["Batman", "Superman", "Aquaman", "Flash"];
  function cryForHelp() {
    // Heroes does not exist inside below function but it does exist in parent function bankRobbery.
    for (const hero of heroes) {
      console.log(`Please help us ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}
bankRobbery();
// Therefore an inner function has access to scope of parent function.
// Same concept applies to all levels of parent functions if we were to nest even more functions.
// It does not go the opposite way, such as if we were to define something inside a child function we do not have access to it in the parent function.
