// * Classes are simply syntactic sugar for what we have already been doing.
// With classes you do not have to add methods to the prototype manually like we did with the constructor notes. You do not have to break up the constructor function and separately add the methods.

// Start with the keyword "class" which you give a name to (i.e. Color). Make sure to stick with the Uppercase class name like constructor functions.
class Color {
  // Next, we add in a constructor, which a function that will execute immediately whenever a new color is created.
  // Add three arguments to the constructor (i.e. r, g and b).
  constructor(r, g, b, name) {
    // ? console.log("INSIDE CONSTRUCTOR");
    // ? console.log(r, g, b);
    // We will access "this" inside constructor.
    // This keyword will automatically refer to a new object. Therefore it still has the same functionality even though it is within a class. It creates the new object and sets the value of "this" to that object (i.e. this.r = whatever is passed into the argument for r).
    // The below three this calls will be added as properties on the new Color() call.
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    // the "name" or "r" in this.name doesn't have to be the same and can be something like this.colorName, but typically it is kept the same.
    // You can call a function within the constructor.
    this.calcHSL();
  }

  // With classes we do not have to do Color.prototype... like we did in the constructor lecture. Instead we can add a random method (i.e. greet(){}). We use the shorthand syntax for defining a method, which can also be used in objects.
  // greet(){} is now a method on every color, but not on the instances and we do not have to type in Color.prototype.greet = ...
  // This class syntax allows us to group everything together.
  // ? greet() {
  //   ? return `HELLO, from the color: ${this.name}!!`;
  // ? }
  // We can refactor the code for rgb() and rgba() since they are both very similar.
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  // Now let's use a normal method such as rgb.
  // When inside a CLASS the keyword "this" refers to the object in the class (i.e. Color) and NOT the prototype, function or window.
  rgb() {
    // Destructor r, g and b.
    // ? const { r, g, b } = this; // Which is the same as: return `rgb(${this.r}, ${this.g}, ${this.b})`;
    // ? return `rgb(${r}, ${g}, ${b})`;
    // * With innerRGB we can now reference that within the rgb method.
    return `rgb(${this.innerRGB()})`;
  }

  // Now let's add a new method called hex.
  hex() {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // Now let's make a function for hsl.
  hsl() {
    // Destructure h, s and l from this.
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  // Let's do one for full saturation, which basically will be the same as hsl(), but set saturation to 100%.
  fullSat() {
    // Only need h and l.
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }

  // Now we can define another function that determines opposite color when we consider the h value of hsl is in a color wheel of 360 degrees.
  opposite() {
    const { h, s, l } = this;
    // Make a new h by adding 180 to the value unless we are above 180 degrees then we will use modulo of 360 to bring us back to 0.
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }

  // Now add the rgba method.
  rgba(a = 1.0) {
    // ? const { r, g, b } = this;
    // ? return `rgba(${r}, ${g}, ${b}, ${a})`;
    // * Same refactor with innerRGB can be done within this method.
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  // * CONTINUING CLASSES EXAMPLES
  // calcHSL() turns RGB color into HSL.
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1.
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values.
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r)
      // Red is max.
      h = ((g - b) / delta) % 6;
    else if (cmax === g)
      // Green is max.
      h = (b - r) / delta + 2;
    // Blue is max.
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360 degrees.
    if (h < 0) h += 360;
    // Calculate lightness.
    l = (cmax + cmin) / 2;

    // Calculate saturation.
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100.
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    // Assign h, s, and l to the object with below code.
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

// To call a new color use the same syntax from constructor notes.
// You do not need to tell the code to run the constructor or call .constructor. It automatically runs as long as it is called constructor.
// * So, you need the "class", "constructor" and "new" in order for this to work.
// Define a color.
const red = new Color(255, 67, 89, "tomato");
// Define a new color.
const white = new Color(255, 255, 255, "white");
// Define a new color.
const orange = new Color(230, 126, 34, "carrot");

// Call the rgb method.
console.log(red.rgb());
// rgb(255, 67, 89)
console.log(red.hex());
// #ff4359
console.log(white.hex());
// #ffffff
// Call rgba.
console.log(red.rgba());
// Let's use the value to change the page background color.
document.body.style.backgroundColor = red.rgba();
// Let's add some opacity with alpha value.
document.body.style.backgroundColor = red.rgba(0.4);
// Now to compare the two calls we will see that they are the same function because they are on the prototype.
console.log(red.hex === white.hex);
// When printing c1 to the console we see that it is an object with properties of r, g, b and name. Also, within proto the constructor is set to Color. We did not program any of that. By using the keyword "new" this is all taken care of.
// Let's show the object.
// ? console.log(c1);
// Let's call the new method, greet.
// ? console.log(c1.greet());
// Let's make a new color and save to a variable.
// ? const c2 = new Color(255, 255, 255, "white");
// ? console.log(c2);
// Now let's call c2.greet().
// ? console.log(c2.greet());

// * To recap: Add properties to the r, g, and b and assign to the Color object (NOT PROTOTYPE). Using Classes, when we create methods they will automatically be added to the prototype without having to call things such as Color.prototype.rgb = function(){...}. You can also keep all of the logic together inside the class. So, every color has this r, g, b and name and every color has the above four methods located on the prototype.

// With HSL, the first value is 0 to 360 degrees around the color wheel, second value is saturation as a percentage and finally the third value is lightness as a percentage.
// hsl(130, 50%, 80%)

// Call calcHSL().
console.log(white.calcHSL()); // Returns undefined however if we look at white it now has h, s and l as part of the Color object.
console.log(white);
// With the above hsl function and this.calcHSL() added to the constructor I can call white.hsl().
console.log(white.hsl());
// Let's try on another color.
console.log(red.hsl());
document.body.style.backgroundColor = red.hsl();

// Let's test out the opposite method.
console.log(red.opposite());
document.body.style.backgroundColor = red.opposite();

// Let's test out full saturation method.
console.log(orange.hsl());
document.body.style.backgroundColor = orange.hsl();
console.log(orange.fullSat());
document.body.style.backgroundColor = orange.fullSat();
