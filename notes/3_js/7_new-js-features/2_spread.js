const maximum = Math.max(13, 12, 3, 4, 7, 78, 33, 24);
const minimum = Math.min(1, 3, 55, 43, 58, 9, 22, 333);

console.log(maximum);
console.log(minimum);

const nums = [13, 44, 567, 3, 22, 12, 45, 78899, 6, 5, 56, 7, 6, 345];
// If I pass in nums into math max or min I get NaN.
// This can be solved by using the spread method and putting ... before the variable.
// Spread basically removes the square brackets of array and spreads out each element into separate arguments.
console.log(Math.max(...nums));

// This also works on strings and loops. See below.
console.log(..."Hello");

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];
// Copy into new array called allPets. Therefore spreading an array into another array versus above where we are spreading an array into a function call.
const allPets = [...cats, ...dogs, "Speedy"];
console.log(allPets);

// Now for spreading object literals.
// There is a conflict though with the below objects because they both have a family property. The second instance of family will override the first, for example in catDog canine will override.
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
const catDog = { ...feline, ...canine };
console.log(catDog);

// If you spread an array inside an object the key is the indices and value is items of the array.
console.log({ ...[2, 4, 6, 8] });
console.log({ ..."Yoyoyoyoyo" });

// Can be used to copy and add data to a user form.
const formData = {
  email: "blueman@gmail.com",
  password: "thisisabadpassword",
  username: "tfunke",
};
const newUser = { ...formData, id: 243, isAdmin: false };
console.log(newUser);
