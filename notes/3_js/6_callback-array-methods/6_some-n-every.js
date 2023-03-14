// These two methods are boolean and always return true or false.
// Checks if every item in array passes then every method is true.

// EXAMPLE
const exams = [80, 90, 92, 78, 77, 90, 89, 84, 81, 77];
// Did everyone pass at 75 score.
// Each element of the array will be passed into the below calback function.
exams.every((score) => score >= 75);
// If any of the above elements in exams array is less than 75 then it will be false.

// EXAMPLE FOR SOME METHOD.
const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
  {
    title: "13 Going on 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand by Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
];

movies.some((movie) => movie.year > 2015);
