// When functions and objects intersect is when objects are formed.
// There are string methods such as "hello".toUpperCase() and array methods such as [1,2,3].indexOf(2).
// ? A method is simply a function that has been placed as a property on an object. Every method is a function, but not every function is a method.
// Since most everything is an object in JS such as functions and arrays, this particular explanation is for when functions is placed as a property in an object LITERAL. Strings are even wrapped temporarily in an object.
// EXAMPLE.
// First create an object called myMath.
const myMath = {
  PI: 3.1415926, // not a method.
  // Below is a method.
  square(num) {
    // num squared.
    return num * num;
  },
  // The above is shorthand but can also be written as square: function(num){} with the function keyword and colon
  // Below is a method.
  cube(num) {
    // num to power of 3 or cubed.
    return num ** 3;
  },
};
console.log(myMath.PI);
console.log(myMath.square(2345));
console.log(myMath.cube(38976));
// Do not have to use dot syntax, you can also use less common syntax below:
// console.log(myMath["cube"](4));
