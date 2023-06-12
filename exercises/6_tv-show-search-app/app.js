const form = document.querySelector("#searchForm");

// Add event listener for click on the button and prevent form default
form.addEventListener("submit", async function (e) {
  e.preventDefault(e);
  // ? console.log("SUBMITTED");
  // console.dir will allow the dev console to show what attributes on the form that we can target below.
  // ? console.dir(form);
  // Let's use the elements property found above.
  // ? console.log(form.elements.query.value);
  // Save the above to a variable.
  const searchTerm = form.elements.query.value;

  // Now call axios on the API.
  // We want q or the query to be whatever the user types in the form input.
  // We want to await the axios so we need to make the function in event listener async.
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
  );
  // ? console.log(res.data);
  // Now we want to grab the image produced from the first show data from the API.
  // ? console.log(res.data[0].show.image.medium);
  // Make a new image in HTML from the above data.
  // First create an image element.
  const img = document.createElement("IMG");
  // Provide the image src from the API data.
  img.src = res.data[0].show.image.medium;
  // Append new image element with src to body.
  document.body.append(img);
});

// Now we want to grab the user inputted data in the input.
