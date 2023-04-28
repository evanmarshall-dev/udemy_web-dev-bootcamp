// Now to prevent default behaviour of a form.
const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function (e) {
  // This is the code for preventing default behaviour.
  e.preventDefault();
  console.log("SUBMITTED THE FORM!!");
});
