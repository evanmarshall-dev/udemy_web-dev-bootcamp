// AND or &&
// Both left and right side of the logical operator need to be true.
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("Incorrect password format");
}

// OR or ||
// Either left or right of logical operator need to be true. Both not required.
// Age requirement example.
/* 
  LOGIC
  *****
  0-5 free
  5-10 $10
  10-65 $20
  65+ free
*/
const age = 90;
if (age < 5) {
  console.log("FREE");
} else if (age < 10) {
  console.log("$10");
} else if (age < 65) {
  console.log("$20");
} else {
  console.log("FREE");
}
// Can be re-written as:
const newAge = 5000;
if ((newAge >= 0 && newAge < 5) || (newAge >= 65 && newAge < 150)) {
  console.log("FREE");
} else if (newAge >= 5 && newAge < 10) {
  console.log("$10");
} else if (newAge >= 10 && newAge < 65) {
  console.log("$20");
} else {
  console.log("You have entered an invalid age.");
}

// Logical NOT Operator or !
// Basically reverses whichever expression it is in front of i.e. !false = true.
// Example.
const firstName = prompt("Enter your first name.");
if (!firstName) {
  prompt("Ooops, your forgot to enter your first name, please try again.");
}
