// FUNCTION STATEMENT.
function add(x, y) {
  return x + y;
}
add(3, 4);

// FUNCTION EXPRESSION.
// Storing function inside a variable.
// Not required to name below function. I only did it to pass linting.
const square = function square(num) {
  return num * num;
};
square(7);

// The reason we do function expressions is because functions are VALUES in JS. We can store them, pass them around, etc.
// This allows us to pass functions as arguments, have functions as the return value etc.
