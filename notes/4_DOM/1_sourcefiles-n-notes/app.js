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

// *** MANIPULATE CLASSES
const h2 = document.querySelector("h2");
// You can do setAttribute, but that inlines styles and overrides anything new added.
// It is better to use the CLASS LIST. Classlist is used to list out classes on an element, add and manipulate them. You do this by adding methods.
// ADD
console.log(h2.classList.add("purple"));
// ADD
console.log(h2.classList.add("border"));
// REMOVE
console.log(h2.classList.remove("border"));
// console.log(h2.classList.contains("border"));
// TOGGLE
console.log(h2.classList.toggle("border"));

// *** Traversing Relative Elements (I.E. Parent and Children)
// So for example select the first bold element.
const firstBold = document.querySelector("b");
// And now I want to select parent element of first bold.
console.log(firstBold.parentElement);
// I can do it again and again and again.
console.log(firstBold.parentElement.parentElement.parentElement);
// Each element only has one parent, but can have several children.
const paragraph = firstBold.parentElement;
// Now look at children.
console.log(paragraph.children);
// This spits back another HTML Collection, however this looks like an array, but it is not. It does have indices and can therefore be iterated.
// Now working with SIBLINGS
const squareImg = document.querySelector(".square");
// nextsibling and previous sibling will return a NODE. Browsers will make whitespace/return a new text node like below.
console.log(squareImg.nextSibling);
console.log(squareImg.previousSibling);
// nextElementSibling will ignore whitespace and provide the next element.
console.log(squareImg.nextElementSibling);

// *** CREATING ELEMENTS (APPEND & APPENDCHILD)
// Below makes an empty image tag. You need to have a src and tell the image element where to go.
console.log(document.createElement("img"));
// Add source
const newImg = document.createElement("img");
console.log(
  (newImg.src =
    "https://storage.googleapis.com/stateless-campfire-pictures/2019/11/eabbbcfe-1573601826c48pl.jpg"),
);
// Now tell it where on the page to go. We will do this by appending as the last child of the body.
console.log(document.body.appendChild(newImg));
// Now add an existing class to it to fit within page better.
console.log(newImg.classList.add("square"));

// EXAMPLE 2
const newH3 = document.createElement("h3");
// Use inner text
console.log((newH3.innerText = "I am a new heading!!"));
// Append to body
console.log(document.body.appendChild(newH3));

// Generally the above is the process to follow. Create element, edit it and then append.

// A newer process is to use just "append." It is more flexible, allows us to append more than one element/nodes/string
// Adding text/string example
const p = document.querySelector("p");
p.append("I am a new paragraph!!!");
// Append more than one thing by using a comma.
p.append(" I am a new paragraph.", " So am I!!");
// You can also prepend instead of append (insert at last child).
// Create the element
const newB = document.createElement("b");
// Append to add content to element. Can also do this with inner text.
newB.append("Ciao");
console.log(p.prepend(newB));

// You can also use insert adjacent element to insert element next to another.
// Create new element.
const newH2 = document.createElement("h2");
// Add text to the new h2.
newH2.innerText = "Whoa! Look at me!";
// Select the element to insert adjacent to.
const h1 = document.querySelector("h1");
// Now do the insert. First you add the method onto the element you will be insert at, in parenthesis you tell it where to insert compared to selected element and then what you will be inserting.
console.log(h1.insertAdjacentElement("afterend", newH2));
// So, if you look at the code you will see that the new element is added adjacent to the h1 and not within it as it would happen with append.
// There is also an "after" option, which pretty much does what we just did above. Also, "before," which is what it says it is.

// *** REMOVING ELEMENTS (REMOVECHILD & REMOVE)
// Removechild requires us to call upon the parent element in order to remove it's child.
// EXAMPLE
// Select the element
const firstLi = document.querySelector("li");
// Select parent element.
const ul = firstLi.parentElement;
// Now we can remove child.
ul.removeChild(firstLi);

// Better option is to use the "remove" method so you can remove the element you are selecting.
const imageOne = document.querySelector("img");
imageOne.remove();
