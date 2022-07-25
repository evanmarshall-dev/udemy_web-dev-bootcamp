const userInput = prompt('Enter something.');
// Do not need to compare anything as we are simply checking the userInput in the if statement.
if (userInput) {
  console.log('TRUTHY!');
} else {
  console.log('FALSEY!');
}
// Below is the only values which are falsey.
// Since 0 is one of the falsey values we can test with below example.
if (0) {
  console.log('TRUTHY');
} else {
  console.log('FALSEY');
}

// Since null is one of the falsey values we can test with below example.
if (null) {
  console.log('TRUTHY');
} else {
  console.log('FALSEY');
}

// Since NaN is one of the falsey values we can test with below example.
if (NaN) {
  console.log('TRUTHY');
} else {
  console.log('FALSEY');
}

// Since undefined is one of the falsey values we can test with below example.
if (undefined) {
  console.log('TRUTHY');
} else {
  console.log('FALSEY');
}
// Everything else is truthy.
// The above strategies are used to determine if a value such as user input exists or not.
