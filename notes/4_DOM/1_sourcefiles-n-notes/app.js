console.log(document.all[10]);
console.log((document.all[10].innerText = "SILLY"));

// ??? 1. SELECTING ELEMENTS
// *** GET ELEMENT BY ID
const bannerImg = document.getElementById("banner");
// console.log(document.getElementById("banner"));
// console.log(bannerImg);
console.dir(bannerImg);

// *** GET ELEMENTS BY TAG NAME
// Getting elements by tag names returns an HTML collection.
console.log(document.getElementsByTagName("img"));
// The above returns a array-like object, which can be assigned to a variable and called upon by index.
const allImages = document.getElementsByTagName("img");
console.dir(allImages[1]);
// Some methods which can be used
console.log(allImages.length);
// Loop over each element source in allImages
for (const img of allImages) {
  console.log(img.src);
  // You can manipulate the image sources with the following
  //   img.src =
  //     "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}

// An ELEMENT in JavaScript is what we are selecting when using the above selection methods. It is what contains all of the properties and methods for a particular HTML element.

// *** GET ELEMENTS BY CLASSNAME
console.log(document.getElementsByClassName("square"));
// assign to variable so they can be iterated over.
const squareImgs = document.getElementsByClassName("square");
// Loop over
for (const img of squareImgs) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

// For elements by tag and elements by class if there is nothing found it returns an empty collection versus element by id, which only ever returns one element, will return "null" if nothing is found.

// *** A BETTER SELECTOR METHOD: QUERYSELECTOR & QUERYSELECTORALL
// querySelector selects only the first instance.
// You can chain on other properties or have multiple selectors.
console.log(document.querySelector("img:nth-of-type(2)"));
// You can select by attribute
console.log(document.querySelector('a[title="Java"]'));
// querySelectorAll returns all matching elements for selector.
console.log(document.querySelectorAll("p"));
// Select all anchor tags nested inside a paragraph.
// Select all anchor tags first for a reference
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("p a"));
// Lets define variable to iterate over the Elements.
const links = document.querySelectorAll("p a");
// Loop
for (const link of links) {
  // print out href property of the selected Elements
  console.log(link.href);
}
