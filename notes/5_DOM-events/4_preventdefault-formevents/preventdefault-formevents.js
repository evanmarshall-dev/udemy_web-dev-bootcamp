// Now to prevent default behaviour of a form.
const form = document.querySelector("#shelterForm");
// Input has a few attributes available, but we will use .value. You can set the value equal to something or list what the value is.
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
  // This is the code for preventing default behaviour so the form does not submit and go to new URL.
  e.preventDefault();
  console.log(input.value);
  // Add input.value to the li.
  const catName = input.value;
  // Create the li's.
  const newLi = document.createElement("LI");
  // Now add input.value to the empty li.
  newLi.innerText = catName;
  // Now we need to append the newly created li with value to the un-ordered list.
  list.append(newLi);
  // Reset the form input back to empty.
  input.value = "";
});

// INPUT & CHANGE EVENTS
// ? NOTE: Unlike keypress, these events only fire when the value of input changes so something like hitting a shift key in the input would have no effect.
// Having something happen with inputs without the need of a submit.
// Example: Change Event.
// Change event only fires when you type in the input then blur or click outside of it.
const secondInput = document.querySelector("#inputTwo");
const heading = document.querySelector("#headingTwo");
// secondInput.addEventListener("change", function (e) {
//   console.log("WHAAAAAAAA???!");
// });

// Example: Input Event.
// Fires any time the input changes. Not needing a blur.
secondInput.addEventListener("input", function (e) {
  // console.log("INPUT");
  // So every time the event listener or input is updated we take the value of the input and set the h1 or heading to that value.
  heading.innerText = secondInput.value;
  // print to console e so we see the event firing.
  console.log(e);
});
