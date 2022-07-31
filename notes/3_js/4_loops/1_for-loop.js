//* Sample For Loop.
// i += 1 can also be written as i++
// First attribute (initialExpression) is starting point of 1, second (condition) is to stop at less than or equal to 10 and third (incrementExpression) is to loop through by one increment.
// This example would save you from writing console.log ten times.
// Common to use i, but you can set this variable to anything.
// Whatever is within the code block will run until the condition is met (in this case, 10 times).
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}

//* Sample loop which prints out even numbers.
// If you want to start at a different point you simply change the initialExpression from let i = 0 to let i = 2.
// If you wanted to print odd numbers keep the i += 2 the same and change the initialExpression to let i = 1.
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//* Sample loop to count down by 10 from 100.
// Can use any math operator for the incrementExpression, but mostly developer use addition.
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

// To avoid infinite loops make sure that your condition will eventually be met.
