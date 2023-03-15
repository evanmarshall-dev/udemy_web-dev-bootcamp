// There is an arguments object, which holds all arguments passed to a function.
// function sum() {
//   console.log(arguments);
//   // Below will not work because it is not am array.
//   return arguments.reduce((total, el) => total + el)
// }
// console.log(sum(3,4,6,9));

// Using rest params will put arguments into an array.
// Below, nums is a parameter which can be customized.
function sum(...nums) {
  console.log(nums);
  // Now the below return will work because the arguments are a function/array.
  return nums.reduce((total, el) => total + el);
}
console.log(sum(22, 3, 67, 55, 43, 2, 334, 2));

// IMPORTANT: Rest params do not work inside arrow functions at all.
// Can also have defined arguments before rest or everything else.
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to: ${gold}`);
  console.log(`Silver medal goes to: ${silver}`);
  console.log(`Thanks to the rest of the participants: ${everyoneElse}`);
}
console.log(raceResults("Harry", "Bobert", "Fred", "Julie", "Harrison"));
