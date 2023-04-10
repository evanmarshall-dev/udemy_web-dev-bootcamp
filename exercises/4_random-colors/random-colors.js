// Select the button.
const button = document.querySelector("button");
// Assign click event listener and console log to make sure it is working.
button.addEventListener("click", () => {
  // console.log("CLICK");
  // To update the h1 to display the color code we need to first select the h1.
  const h1 = document.querySelector("h1");
  // We will create a color and assign it as a background color.
  // You can access body with query selector or as simple as document.body.
  // document.body.style.backgroundColor = "olive";
  // Create the three random numbers from 0 to 255.
  // const r = Math.floor(Math.random() * 255);
  // const g = Math.floor(Math.random() * 255);
  // const b = Math.floor(Math.random() * 255);
  // Now we need to build it up into a string and save to variable.
  // const newColor = `rgb(${r}, ${g}, ${b})`;
  const newColor = makeRandomColor();
  // Set the background color to the newColor.
  document.body.style.backgroundColor = newColor;
  // Overwrite what is currently in the h1.
  h1.innerText = newColor;
});

// To generate a random number we need to generate three random numbers from 0 to 255 to make the RGB.
// To create the color is enough logic to warrant a separate function.
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  // In function we return the below.
  return `rgb(${r}, ${g}, ${b})`;
};
