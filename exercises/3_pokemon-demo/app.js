// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png
// Select the container we will append the images to.
const container = document.querySelector("#container");
// Create variable for base URL.
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// Create a loop to dynamically loop through all the pokemon. For each i in the loop we will have logic where it creates a new image with the following source. We will have to make the "34.png" part of the source dynamic.
for (let i = 1; i <= 151; i += 1) {
  // Create a div to contain each image and content.
  const pokemon = document.createElement("div");
  // Add class to the div created by pokemon in order to clean up styles.
  pokemon.classList.add("pokemon");
  // Create a span element to contain pokemon number.
  const label = document.createElement("span");
  // Set inner text to the label to i or the number.
  label.innerText = `#${i}`;
  // Create new image element.
  const newImg = document.createElement("img");
  // Set a source to the baseURL, the i or number we loop through and .png.
  newImg.src = `${baseURL}${i}.png`;
  // First append image and label to pokemon div
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  // Then append the pokemon div to the main container
  container.appendChild(pokemon);
}
