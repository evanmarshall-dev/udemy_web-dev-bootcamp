const subreddit = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// To print above array with a for loop.
for (let i = 0; i < subreddit.length; i += 1) {
  console.log(`Visit reddit.com/r/${subreddit[i]}`);
}

// Print above array using for of loop.
// variable name (i.e. sub) represents individual elements in the array and not representing an index.
// Much easier syntax, but not widely supported.
for (const sub of subreddit) {
  console.log(sub);
}

// Example re-writing nested for loops with for of loops.
// FOR LOOP
const seatingChart = [
  ["Kirsten", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i += 1) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j += 1) {
    console.log(row[j]);
  }
}

// FOR OF LOOP
for (const row of seatingChart) {
  for (const student of row) {
    console.log(student);
  }
}

// Iterating over something which is not an array.
for (const char of "Hello World") {
  console.log(char);
}

// Maps, sets and object literals can also be iterated over.
