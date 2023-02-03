// Filter method creates a new array in the filter and does not alter the existing one.
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24,
// ];
// Below will run and return false until it gets to 4 in the numbers array.
// numbers.filter(n => {
//   return === 4;
// })

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

// EXAMPLE get an array with just higher rated movies.
const goodMovies = movies.filter((movie) => {
  return movie.score > 80;
});

// EXAMPLE using map to filter as object types instead of objects. Done by combining functions.
const goodTitles = goodMovies.map((m) => m.title);
// Can also be written as a single function.
movies.filter((m) => m.score > 80).map((m) => m.title);

const badMovies = movies.filter((movie) => {
  return movie.score < 70;
});

console.log(goodMovies);
console.log(badMovies);
console.log(goodTitles);
