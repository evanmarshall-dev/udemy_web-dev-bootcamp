// When I click the button it will get a random background colour.
// Create a function which creates a random number up to 255 for each variable r, g and b.
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

// To eliminate duplicate code when the only thing that is changing is the selected element, you can write separate function, but it is a general function without access to the elements.
// This is where the keyword "this" will come in handy.
// THIS inside a callback function with event listener will select the element being clicked on or whatever event is being listened to.
// All of the styling logic in the above functions, inside the event listener can be added to the colorize function below.
// After the click event instead of an anonymous function you would call the colorize function.
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

// Select all buttons.
const Btns = document.querySelectorAll("button");
// Loop over all those buttons.
for (const Btn of Btns) {
  // Btn.addEventListener("click", function () {
  Btn.addEventListener("click", colorize);
  // Add event listener for click and print to console to make sure the connection to every button click is linked.
  // console.log("CLICKED");
  // Now to reference the one button that is clicked and change the background colour using the above makeRandColor function.
  // Btn.style.backgroundColor = makeRandColor();
  // this.style.backgroundColor = makeRandColor();
  // // Change font colour.
  // Btn.style.color = makeRandColor();
  // this.style.color = makeRandColor();
  // });
}

// Select all h2s.
const h2s = document.querySelectorAll("h2");
// Loop over all h2s.
for (const h2 of h2s) {
  // h2.addEventListener("click", function () {
  h2.addEventListener("click", colorize);
  // console.log(this);
  // h2.style.backgroundColor = makeRandColor();
  // h2.style.color = makeRandColor();
  // this.style.backgroundColor = makeRandColor();
  // this.style.color = makeRandColor();
  // });
}
