const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  debra: 81,
  von: 60,
};

// Object literals are not considered iterable.
// For In loop is the option which allows iterating over an object literal. It only iterates over the key in the key value pair of an object literal.
for (const person in testScores) {
  // console.log(person);
  // You can get the values with the code below:
  console.log(`${person} scored ${testScores[person]}`);
}

// Another option is Object.keys(nameOfObject) outputs an array.
// Another option is Object.values(nameOfObject) outputs an array.
// Another option is Object.entries(nameOfObject) outputs an array of key/value pairs.
// For example to get average of scores key:
let total = 0;
// Object literals do not have a length so will have to use Object.values().
const scores = Object.values(testScores);
for (const score of scores) {
  // console.log(score);
  total += score;
}
console.log(total / scores.length);
