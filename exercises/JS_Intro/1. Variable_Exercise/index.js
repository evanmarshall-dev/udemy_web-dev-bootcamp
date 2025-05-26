function test() {
  var a = "3";
  var b = "8";
}

// Change it so that the console logs are changed to "a is 8" and "b is 3".
// ! You cannot redeclare the variables.
// ! Do not change existing code.
// ! You are not allowed to type any numbers.

// Exercise code written below:
var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);
