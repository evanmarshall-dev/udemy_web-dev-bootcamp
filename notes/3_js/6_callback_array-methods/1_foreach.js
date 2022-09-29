// ? Array methods such as for each are passed into an array as a function.
// For each allows us to run code once per item in an array.
console.log(`____________________________________
EXAMPLE 1`);
// EXAMPLE 1.
const myNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// You can write the function separate from the foreach.
function printOut(element) {
  if (element % 2 === 0) {
    console.log(element);
  }
}
// To print out each number by writing foreach as below and passing in a callback.
myNumbers.forEach(printOut);
// The above of passing in a function already defined is uncommon. The more common process is passing in a function inline.
console.log(`____________________________________
EXAMPLE 2`);
// EXAMPLE 2.
// Passing in an anonymous function with parameter "el".
const myNumbersTwo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
myNumbersTwo.forEach(function (el) {
  // To print out only even numbers you use modulus of 2 equal to 0.

  console.log(el);
});
console.log(`____________________________________
EXAMPLE 3`);
// Can also print out elements in an array using for of loops.
// EXAMPLE 3.
for (const el of myNumbersTwo) {
  console.log(el);
}
console.log(`____________________________________
EXAMPLE 4`);
// EXAMPLE 4.
// Movies array which contains objects.
const moviesArr = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];
moviesArr.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});
// ! ForEach not as common now that we have ForOf.
