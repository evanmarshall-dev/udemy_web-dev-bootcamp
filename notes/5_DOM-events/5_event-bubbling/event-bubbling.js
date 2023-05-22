const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColour = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColour();
  // BELOW is how you stop event bubbling.
  e.stopPropagation();
});

// If we click the button it changes the color, but also toggles the hide class. This is also event bubbling.
container.addEventListener("click", function () {
  container.classList.toggle("hide");
});
