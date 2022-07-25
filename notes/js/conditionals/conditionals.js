// Example conditional - IF Statement.
const rating = 3;

if (rating === 3) {
  console.log('You rock!');
}

// Example 2.
const onePlus = 1 + 1 === 2;

if (onePlus) {
  console.log('Your math is great!');
}

// Example 3, If/Else Statement.
const rando = Math.random();

if (rando <= 0.5) {
  console.log('Your number is less than 0.5!');
} else {
  console.log('Your number is greater than 0.5!');
}
// Write rando output after if block to avoid redundancy.
console.log(rando);

// Example 4, Else if Statement.
// You can chain together as many else if statements as you want. You can also end with an else statement.
// You can compare to lowercase to eliminate issues of case sensitivity.
const dayOfWeek = prompt('Please enter a day of the week.').toLowerCase();

if (dayOfWeek === 'monday') {
  console.log('IFHM!!');
} else if (dayOfWeek === 'friday') {
  console.log('TGIF!!');
} else {
  console.log('Meh, just another day...');
}

// Nesting conditionals inside other conditionals.
// Example, Password conditions.
const password = prompt('Please enter a new password');
// condition 1 = password must be 6+ characters.
if (password.length >= 6) {
  // console.log('Long enough password.');
  if (password.indexOf(' ') === -1) {
    // console.log('Good job, no spaces.');
    console.log('Password is valid.');
  } else {
    console.log('Password cannot contain spaces.');
  }
} else {
  console.log('Password too short. Must be 6+ characters.');
}
// condition 2 = password cannot include spaces. Index of " " a space is -1 so that is what we want.
// if (password.indexOf(' ') === -1) {
//   console.log('Good job, no spaces.');
// } else {
//   console.log('Password cannot contain spaces.');
// }
// You do not want to have two separate messages to the user so you would nest the conditionals.
