//* Sample While Loop
let count = 0;
while (count < 10) {
  // Eliminate infinite loop within thw code block with ++ or +=, etc
  count++;
  console.log(count);
}

// While loop is more useful when we do not know how many times something iterates (i.e. a game a checkers where we want to continue looping until someone has won the game).

//* Sample.
const secret = 'BabyHippo';
let guess = prompt('Enter the secret code...');
while (guess !== secret) {
  guess = prompt('Enter the secret code...');
}
console.log('Congrats! You got it!');
