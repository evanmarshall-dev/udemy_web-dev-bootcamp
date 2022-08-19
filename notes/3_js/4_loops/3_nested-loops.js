//* Sample Nested Loops.
for (let i = 1; i <= 10; i += 1) {
  console.log(`i is: ${i}`);
  for (let j = 1; j < 4; j += 1) {
    console.log(`    j is: ${j}`);
  }
}

// Nested loops are commonly used when iterating nested arrays.
//* Sample.
const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i += 1) {
  // Create variable
  const row = seatingChart[i];
  // Because zero indexed add 1 to i
  console.log(`ROW #${i + 1}`);
  // No longer working with seatingChart, we are now working with row
  for (let j = 0; j < row.length; j += 1) {
    console.log(row[j]);
  }
}
