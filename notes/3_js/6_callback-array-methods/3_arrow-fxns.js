// FUNCTION EXPRESSION
// Function expressions cannot exist on their own. They need the name or const name defined the same as arrow functions.
// const add = function (x, y) {
//   return x + y;
// };

// Difference is with arrow functions you can have it exist on it's own when defined in a variable.
const addAgain = (x, y) => {
  return x + y;
};
console.log(addAgain(5, 325));

// ANOTHER EXAMPLE
// If only one argument then the parenthesis are optional.
const square = (x) => {
  return x * x;
};
console.log(square(44));

// EXAMPLE with no argument
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDie());

// IMPLICIT RETURNS
// Leaving off the "return" keyword.
// Example when there is only a single line return you can remove the "return" keyword and replace curly braces with regular.
// const rollDieAgain = () => (
//   Math.floor(Math.random() * 6) + 1;
// )

// EXAMPLE where you can remove parenthesis altogether and put code on one line.
const addAgainAlso = (a, b) => a + b;
console.log(addAgainAlso(45, 567));

// MAP AND FOREACH USING ARROW FUNCTIONS
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by Me",
    score: 86,
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

// EXAMPLE with regular map.
// const movieProfiles = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });
// console.log(movieProfiles);

// EXAMPLE as an arrow function.
// Can also remove parenthesis around movie and also change curly braces to regular as well as remove "return" keyword.
// Can also remove regular parenthesis and move code to one line.
const movieProfiles = movies.map((movie) => {
  return `${movie.title} - ${movie.score / 10}`;
});
console.log(movieProfiles);
