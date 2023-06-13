// * All of the below factory functions is not the preferred way to make objects. The preferred way uses prototypes and is called a constructor function.
// Below function returns an rgb value as hex.
function hex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
console.log(hex(255, 100, 25));
// rgb(255, 100, 25).
// Output is #ff6419.

// Below function returns rgb value.
function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}
console.log(rgb(233, 45, 55));

// If you want to make an object to convert back and forth from rgb to hex, without having to pass in number arguments each time, you could use a FACTORY FUNCTION.
// The factory function would make an object which automatically had a hex method and rgb method and stores the r, g and b values as properties on the object.
// Below I will be building up an object OR factory, returns it to be used.

// * By storing the r, g and b values below in an object, which contains the r, g and b properties (i.e. color.r = r;), I can access them in color.rgb or color.hex.
function makeColor(r, g, b) {
  // Make an empty object to add things into.
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  // Add in method on the color object.
  color.rgb = function () {
    // We have access to r, g and b using the keyword, this.
    // ? console.log(this);
    // ? return `rgb(${this.r}, ${this.g}, ${this.b})`;
    // Destructure from "this."
    // * THIS refers to the above color object (i.e. const color = {}).
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Adapt the above hex function.
  color.hex = function () {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  // Return color.
  return color;
}

const firstColor = makeColor(35, 255, 150);
// Below we are not calling rgb and passing in arguments, we are calling the .rgb or .hex method we created.
// Calling firstColor.rgb will pass in an rgb string.
console.log(firstColor.rgb());
// Call .hex.
console.log(firstColor.hex());
// #23ff96
// rgb(35, 255, 150)
// You can even change one of the object values (firstColor.r = 255;) and it will change for future firstColor calls.

// Passing in the three numbers into the makeColor function gives back an object of {r:35, g:255, b:255}.
// ? console.log(makeColor(35, 255, 255));

// * To recap: We first add an object (color), then add properties to that object (color.g = g;), then we add methods (color.hex = function() {...code...}), then return the object (color). This is called a factory function. A factory function is making an object based off of a recipe or pattern. Above the recipe is within the makeColor function and creates the color object.

// The recipe returns three numbers and two methods as seen below.
console.log(makeColor);
