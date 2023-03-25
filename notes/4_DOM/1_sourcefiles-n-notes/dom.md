# Document Object Model (DOM)

The Document Object Model is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The HTML document (and XML documents) are represented as a tree structure in which each node is an object representing a part of the document (e.g. element, text, comment, etc.)

## Accessing the DOM

Each HTML element gets its own JavaScript object that we can interact with and manipulate, and these objects all share a hierarchical relationship. The top level of the tree is always the `document` object. This can be viewed within the console by typing: `console.dir(document)`.

Within this `document` object there will be properties/methods such as "URL", reference to the "body", the "domain", whether it is "full screen" or not, the amount of "images" on the page and more.

We can use various properties, methods, and events available in the document object to modify HTML:

```javascript
// get the element with an id of "myElement"
var element = document.getElementById("myElement");

// change the text within the element
element.innerText = "Hello, World!";

// add a class to the element
element.classList.add("active");

// add an event listener to the element
element.addEventListener("click", function () {
  console.log("Element clicked");
});
```

The DOM is a powerful tool for creating dynamic and interactive web pages.
