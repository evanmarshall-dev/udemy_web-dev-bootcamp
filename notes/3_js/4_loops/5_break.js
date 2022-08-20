let input = prompt("Hey, stop copying me!");
while (input === 0) {
  input = prompt(input);
  if (input.toLowerCase() === "Stop copying me") {
    break;
  }
}
console.log("Ok, you win!");
// The break keyword exits the loop.

for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
