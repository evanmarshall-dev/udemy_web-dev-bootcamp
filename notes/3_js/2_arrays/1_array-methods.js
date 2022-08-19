// Push and Pop Array Methods.
// Both allow adding or removing from the END of an array.

// Example push (add).
const movieLine = ["Tom", "Dick", "Harry"];
movieLine.push("Dan");
// Can push multiple things to an array, you simply separate by comma.
// Unlike strings, when you make a change to the array it actually changes. With a string if you were to say change toUpperCase the string stays the same.

// Example pop (remove).
movieLine.pop();
// You can also capture in a variable, like so.
const person = movieLine.pop();
console.log(person);

// Shift and Unshift Array Methods.
// Both allow adding or removing from the START of an array.

// Example shift (remove).
const getEr = movieLine.shift();
console.log(getEr);

// Example Unshift (add).
movieLine.unshift("Billy", "Bob", "Cletus");
