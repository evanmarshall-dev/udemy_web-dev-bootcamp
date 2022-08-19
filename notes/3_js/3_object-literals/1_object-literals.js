//* Example Object Literal.
// Each Object literal is made up of key:value pairs.
const person = {
  firstName: "Evan",
  lastName: "Marshall",
};
console.log(person);
// Values can be strings, numbers, arrays and booleans.
// Main difference between object literal and an array (object) is there is no order to object literals.

// Accessing data from an object literal. You can use dot syntax or bracket syntax.
//* Sample dot syntax:
console.log(person.firstName);
// Bracket syntax you replace the dot with a square bracket and the value needs to be in quotations.

// Every key is converted to a string except for SYMBOLS.
// Main distinction between two syntax comes when you try using a variable for your value, which you cannot do with dot syntax.

//* Adding or updating info in object literal.
//* Sample.
const midTerms = { Danielle: 96, Thomas: 78 };
console.log(midTerms);
// If I want to change Thomas' score.
midTerms.Thomas = 79;
console.log(midTerms);
// If I want to add someone to the object.
midTerms.Ezra = "B+";
console.log(midTerms);

//* Nesting Arrays inside Object Literal.
// An array can consist of a bunch of object literals or an object literal can contain arrays or object literal can contain nested object literals.
//* Sample object literals inside an array.
const comments = [
  { username: "Tammy", text: "lololol", votes: 9 },
  { username: "FishBoi", text: "glub glub", votes: 12387 },
];
console.log(comments[1].text);
