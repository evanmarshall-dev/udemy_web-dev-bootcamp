// EXAMPLE of old way of doing this.
// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie(6));
// The above will output a number between 1 and 6, but if I want to default to a number without passing in any, do the following.

// EXAMPLE of new way.
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie);
// The order of parameters matters as JS will output based on first come first serve. Therefore you should always have params with default value come second.
