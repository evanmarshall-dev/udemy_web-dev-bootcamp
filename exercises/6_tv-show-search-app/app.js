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
  // @ts-ignore
  const searchTerm = form.elements.query.value;
  // config variable can handle various different configs from this API, such as params and headers.
  // ? const config = { params: { q: searchTerm }, headers: {} };
  const config = { params: { q: searchTerm } };
  // Empty the input.
  form.elements.query.value = "";

  // Create function so that we can loop over the img.src above and not just grab the first one.
  // const makeImages expects an array of shows.
  const makeImages = (shows) => {
    for (const result of shows) {
      // ? console.log(result);
      // Not all have an image so we will do an if statement.
      if (result.show.image) {
        // If there is a medium image then run the code and if not then ignore it.
        const img = document.createElement("IMG");
        img.src = result.show.image.medium;
        document.body.append(img);
      }
    }
  };

  // Now call axios on the API.
  // We want q or the query to be whatever the user types in the form input.
  // We want to await the axios so we need to make the function in event listener async.
  // @ts-ignore
  const res = await axios.get(
    // ? `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
    // Instead of the above you can add in config of params using this API. Put the params config in it's own variable above.
    // * You can confirm the params added to the endpoint in the dev console under "NETWORK".
    `https://api.tvmaze.com/search/shows`,
    config,
  );
  // ? console.log(res.data);
  // Now we want to grab the image produced from the first show data from the API.
  // ? console.log(res.data[0].show.image.medium);
  // Make a new image in HTML from the above data.
  // First create an image element.
  // ? const img = document.createElement("IMG");
  // Provide the image src from the API data.
  // @ts-ignore
  // ? img.src = res.data[0].show.image.medium;
  // Append new image element with src to body.
  // ? document.body.append(img);
  // Call the below function.
  makeImages(res.data);
});
