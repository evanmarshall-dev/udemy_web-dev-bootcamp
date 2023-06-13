// * The "new" keyword is an operator and can be used to crete things such as new String or new Array (however not a common use).
// The shortcomings of the Factory function are: each time we make a new object, we start with an empty object (i.e. color = {}), create unique properties added to the object (i.e. color.r = r;), and then we create methods with functions (i.e. color.rgb = function() {...}) which are uniquely added to the created object (see factory functions notes). The color object now hows it's own unique rgb or hex function. The values or r, g and b values can always be different and create a different result, but there is no reason for the object to have a unique copy of the function itself.
// If we create a function like function rgb2() in the console, it can be reused as it is not unique to an object. This is not what is happening in the factory functions.
// * See below factory function to see that it is not creating reusable functions.
// When you print to console black or firstColor you will see that they each have their own copy of .rgb and .hex. If you compare black.hex === firstColor.hex you will see they are not equal. However, if you compare two string methods ("hi".slice === "bye".slice) you will see that they are true or equal. This is because the slice method is not defined on every string object, but rather they are defined on the PROTOTYPE. Each string or array gets it's methods from one prototype object. Furthermore, the above strings do not have their own copy of the slice method. They are each referencing one slice method located on the prototype.
// * This is where the CONSTRUCTOR function come into play. Within a constructor function we are referencing "this" within the function without calling any return. Unlike the factory function, where we were referencing "this" within an object inside our methods.

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();
console.log(firstColor);

const black = makeColor(0, 0, 0);
black.rgb();
black.hex();
console.log(black);

// * CONSTRUCTOR FUNCTION
// Usually the function is labelled with a capital letter to indicate that it is not a regular function, but rather one which creates an object.
