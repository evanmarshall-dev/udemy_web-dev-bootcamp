// Most common case for using this keyword is inside an object in a method.
// EXAMPLE.
// Below we create an object with a method called meow. In order for the method to access rest of properties in the cat object we use the keyword this which references the cat object.
const cat = {
  name: "Blue Steele",
  color: "Grey",
  breed: "Scottish Fold",
  meow() {
    console.log(`${this.name} says MEOW!`);
  },
};
cat.meow();
// This keyword refers to the object cat, but this is not always the case. The value of this can change depending on how we call the function.
// EXAMPLE 2.
// Below we are not executing meow but rather referring to it.
const meow2 = cat.meow;
console.log(meow2());
// In this example we are not invoking the meow function the same with cat.meow() cat to left of function with dot. Therefore the this keyword no longer refers to the cat object, but rather it refers to the WINDOW object.
// This is because the WINDOW object essentially is to the left of meow2() since there is nothing else in its place. Window is the default value for the keyword this.
// ? The window object is the TOP level object in every window. Every function you create will be added to the window object and can be called with window.yourFunction. However calling a function using window method is not ordinarily used.
