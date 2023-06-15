const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

// You need to export what you want to be required in other scripts.
// ? module.exports.add = add;
// ? module.exports.PI = PI;
// ? module.exports.square = square;

// You can also drop the module and use just exports. As long as exports is not assigned to something else as a variable.
// ? exports.square = square;

// If you stop exporting one of the above then it will no longer be available in app.js and shows as undefined.

// Can also assign all variables to an object to simplify the module.export.
const math = {
  add,
  PI,
  square,
};

module.exports = math;
