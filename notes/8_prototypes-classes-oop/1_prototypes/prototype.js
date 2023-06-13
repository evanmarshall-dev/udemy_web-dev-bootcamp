Array.prototype;

// String are complicated because they are considered PRIMITIVE types, but they each get an intermediate object wrappers, which is where the string methods come from (the string prototype).
String.prototype;
// You can attach a custom method to the string prototype. Now when you call String.prototype it will have a method called "grumpus" from the below code.
// ? String.prototype.grumpus = () => {
//   ? alert("GO AWAY!!!");
// ? };

// Create a new string.
const cat = "Blue";
// Call the grumpus method on cat and the alert will display.
cat.grumpus();
// Now every time you create a string you will have access to a new string method called grumpus.

// Now to add on a new method to the String object, which allows it to be called on any new string.
// ? String.prototype.yell = function () {
//   ? return `OMG!!!! ${this.toUpperCase()}!!!!! ARRRGHHH!`;
// ? };

// Override something on the Array object. The below code will replace the existing pop method.
// ? Array.prototype.pop = function () {
//   ? return "Sorry, I want that element. I will never pop it off!";
// ? };
