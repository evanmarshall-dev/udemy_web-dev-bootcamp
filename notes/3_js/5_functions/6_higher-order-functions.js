// If you can store a function as a variable then you can also pass it in as an argument.
// Below example has function running twice which is looking for an argument as a function.
function callTwice(func) {
  func();
  func();
}
// Another EXAMPLE.
function callTenTimes(f) {
  for (let i = 0; i < 10; i += 1) {
    f();
  }
}
// Now define the function we will be passing in as an argument.
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
// When you call the callTwice function below you do not use parenthesis after function name (rollDie) as we want to call on the VALUE of the function.
callTwice(rollDie);
console.log(`------------------------------------
EXAMPLE #2.`);
// EXAMPLE 2. Call.
callTenTimes(rollDie);
