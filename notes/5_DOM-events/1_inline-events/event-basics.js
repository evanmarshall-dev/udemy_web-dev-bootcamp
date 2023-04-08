// ? - EVENT BASICS
// Three ways to run code on click event.
// * #1. Inline Events.
// * #2. Event Property.
// Create variable to select the element.
const btn = document.querySelector("#v2");
// Add the onlick method with function.
btn.onclick = () => {
  console.log("You clicked me!");
  console.log("I hope it worked.");
};
// Add separate function before event.
function scream() {
  console.log("AAAHHHHH!!!");
  console.log("Stop touching me!");
}
// Then the onmouseenter event is set to the function.
// The function scream is not being called by me. It is being set to the onmouseenter event. When the user performs the event is when the function is called.
btn.onmouseenter = scream;

// Even when you set an event inline the console assigns it to a function in the console.
// Also, these events can be set to any HTML element, not just buttons.
// You need to set the events to a function instead of simply setting the event to, let's say, a console.log() is actually running the function NOT setting it to a function so it will run right away.
// btn.onclick = alert("This will run right away.");

// * #3. addEventListener.
// Create variable for the button selection.
const btn3 = document.querySelector("#v3");
// The add event listener takes two parameters, the event and an anonymous function.
// btn3.addEventListener('click', function() {})
// OR an arrow function.
btn3.addEventListener("mouseup", () => {
  alert("CLICKED");
});
// You can also use a named function instead of anonymous.
// Add Event Listener is the most ideal option because:
