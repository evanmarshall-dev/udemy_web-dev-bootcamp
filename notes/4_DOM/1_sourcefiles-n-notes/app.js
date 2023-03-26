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

// ??? 2. MANIPULATING ELEMENTS
// *** INNER TEXT
console.log(document.querySelector("p").innerText);
// This innerText can be changed.
// console.log((document.querySelector("p").innerHTML = "lololololololololol"));
// *** TEXT CONTENT
// Differs from innerText due to providing everything inside the HTML tag and innerText will only show what is visible. For example, if something has display set to "none" it will NOT show up using innerText.
// If you were using innerText to add italics to an h1 for example it would display the <i>heading</i> as well. Therefore we use innerHTML as below.
// *** INNER HTML
// innerHTML selects the HTML markup as well.
console.log(document.querySelector("p").innerHTML);
// Example of updating the HTML.
console.log(
  (document.querySelector("h1").innerHTML = "<i>HOLY Shit! I Changed!</i>"),
);
// You can also ADD to an element.
console.log(
  (document.querySelector("h1").innerHTML += " Give me a Coke <sup>TM</sup>"),
);

// *** ATTRIBUTES
// For example the type of an input is an attribute or the id or src or title, etc.
// You can change the id attribute.
console.log((document.querySelector("#banner").id = "whoops"));
console.log((document.querySelector("#whoops").id = "banner"));

// You can also access attributes with "getAttribute" "setAttribute" METHODS.
const firstLink = document.querySelector("a");
console.log(firstLink.href);
// Can also be done by.
console.log(firstLink.getAttribute("href"));
// However the getAttribute above is different as you are pulling the data between the quotes of the href versus pulling directly from anchor tag will give the computed value.
// Check for if there is a class or title.
console.log(firstLink.getAttribute("class"));
console.log(firstLink.getAttribute("title"));
// setAttribute allows us to make a change to the second argument passed in.
console.log(firstLink.setAttribute("href", "https://www.google.com"));

// save input with type of text to variable.
const input = document.querySelector("input[type='text']");
console.log((input.type = "password"));
console.log((input.type = "color"));
console.log(input.setAttribute("type", "text"));

// *** MANIPULATE STYLES
const headingOne = document.querySelector("h1");
// .style will return a large object of styles in camel case and the style object does not include current styles. It only shows inline styles which is not recommended.
console.log(headingOne.style);
// We can assign a value to styles, such as color.
console.log((headingOne.style.color = "purple"));
console.log((headingOne.style.fontSize = "5rem"));
// The above changes styles inline, but there is a better way which is to add a class and then manipulate that via JS.

// Change color of all links.
const allLinks = document.querySelectorAll("a");
for (const link of allLinks) {
  link.style.color = "red";
  link.style.textDecorationColor = "purple";
  link.style.textDecorationStyle = "wavy";
}

// Now we still cannot grab the computed styles via JavaScript, but this can be done by working on the window object as below.
// Use the headingOne variable from above and it will output a css declaration.
console.log(window.getComputedStyle(headingOne));
// For specific styles.
console.log(window.getComputedStyle(headingOne).color);
console.log(window.getComputedStyle(headingOne).fontSize);
console.log(window.getComputedStyle(headingOne).fontFamily);
console.log(window.getComputedStyle(headingOne).margin);
