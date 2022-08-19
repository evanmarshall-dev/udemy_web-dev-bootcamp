//* Sample concat Method.
const arrayOne = ["a", "b", "c"];
const arrayTwo = ["d", "e", "f"];
const arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);
// Check to see if array changed.
console.log(arrayOne);

//* Sample includes Method.
// Boolean so returns true or false.
console.log(arrayOne.includes("10"));

//* Sample IndexOf Method.
// If it doesn't exist in array it will return -1.
// If multiples of the same it only returns first instances index.
console.log(arrayTwo.indexOf("d"));

//* Sample reverse Method.
// Unlike the rest, it is a destructive method so it CHANGES the original.
const reversed = arrayThree.reverse();
console.log("reversed:", reversed);
// Check to see if array changed.
console.log(arrayThree);

//* Sample slice Method.
const milkyWayPlanets = [
  "Earth",
  "Uranus",
  "Saturn",
  "Neptune",
  "Pluto",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
];
// Below goes from index of 2 until end or array.
// console.log(milkyWayPlanets.slice(2));
// Below starts at first index and stops up to second index (not including second index).
console.log(milkyWayPlanets.slice(4, 5));
// Can also use a negative index to get slice starting at the end, for example the last three:
console.log(milkyWayPlanets.slice(-3));

//* Sample splice Method.
// With splice you have to have index to start, what to delete and what you are adding.
// Not required to add an item and you can add multiple items separated by commas.
// Splice is destructive to original array.
const months = [
  "January",
  "Fabury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Below inserts at index 1.
months.splice(1, 1, "February");
console.log(months);

//* Sample sort Method.
// Default sort converts all to strings and alphabetical.
// Struggles with number sorting, therefore needs a function.
const fruits = ["Apple", "Pear", "Orange", "Watermelon"];
fruits.sort();
console.log(fruits);

// You can find more examples of array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//* NOTE ON ARRAYS, EQUALS and MEMORY
// JavaScript has a max number it can store except for arrays can be any size number. Therefore arrays are stored with a reference and [1,2,3] === [1,2,3] would return false due to them being two different arrays each with a different reference.
// If you set one array to a variable and create another variable and make it equal to the same array then they will have the same reference in memory. Any changes made to one will be remembered and affect both variables/arrays. Also, if you compare both variables to each other (===) the return would be true.
// ** When you compare arrays it is not comparing contents, but the references in memory.

//* ARRAYS and CONSTANTS
// Since a const set to array is for the reference memory and not content then the content in array can change. Not the reference/variable cannot change.
// Therefore, you can add/remove content from array with push/pop, but you cannot REASSIGN the array/variable to something else.
// * Cannot reassign array as a const, but you can change the content in the array all you want.

//* Sample Array Nesting.
// You can chain together arrays to return content from a nested one.
const nest = [
  ["X", "O", "X"],
  ["O", "O", "X"],
];
console.log(nest[0][1]);
