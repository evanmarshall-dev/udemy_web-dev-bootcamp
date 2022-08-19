//* Sample of looping through an array.
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < days.length; i += 1) {
  console.log(i, days[i]);
}

//* Sample in reverse.
for (let i = days.length - 1; i >= 0; i -= 1) {
  console.log(i, days[i]);
}
