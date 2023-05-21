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
