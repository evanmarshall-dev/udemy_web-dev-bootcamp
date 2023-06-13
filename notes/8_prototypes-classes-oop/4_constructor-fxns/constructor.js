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
// ? console.log(firstColor);

const black = makeColor(0, 0, 0);
black.rgb();
black.hex();
// ? console.log(black);

// * CONSTRUCTOR FUNCTION
// * The secret to the constructor function is the "new" keyword or operator. You call "new" before the function call makes it behave differently.
// * Calling new before the function call creates a blank/plain JS object, links or sets the constructor of "this" object to another object, passes the newly created object (step 1) as "this" context and returns "this" if the function does not return its own object. All of the above is similar to what we did above in the factory function but does it implicitly (behind the scenes).
// ! DO NOT USE ARROW FUNCTIONS WITH KEYWORD THIS.
// Usually the function is labelled with a capital letter to indicate that it is not a regular function, but rather one which creates an object (A constructor function).
// DEFINE RECIPE FOR COLOR
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  // printing "this" refers to the window. This is because within this function (not inside any object) "this" refers to the global scope which is the window.
  // ? console.log(this);
}
// What happens when you execute Color()? "undefined" prints.
// Using "new" creates a new object in Color(), which we do not tell it to do, and also adds a constructor to the prototype and sets that constructor to Color().
// * Therefore with constructors we can add methods NOT to the individual objects BUT to the prototype.
// ? console.log(new Color(255, 40, 100));

// Define the method on the prototype outside the constructor function.
// Similar to what we did before (i.e. String or Array.prototype.pop = function(){}) to override it.
// EVERYTHING WILL BE DEFINED ON THIS ONE PROTOTYPE AS RGB AND HEX AND WE ONLY NEED ONE COPY OF THOSE METHODS.
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}. ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Add a new method in.
// Add parameter of the alpha channel with a default value of 1 (a=1).
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// Now calling it with "new."
const color1 = new Color(40, 255, 60);
// ? console.log(color1);
const color2 = new Color(0, 0, 0);
// ? console.log(color2);

// ? console.log(color1.hex()); // #28ff3c
console.log(color2.hex()); // #000000
// ? console.log(color1.hex === color2.hex); // Returns "true."

document.body.style.backgroundColor = color1.rgb();
document.body.style.backgroundColor = color1.rgba(0.4);

// * It is a bit messy having the object color defined then three different methods for rgb, hex and rgba so the CLASS keyword will fix this syntax.
