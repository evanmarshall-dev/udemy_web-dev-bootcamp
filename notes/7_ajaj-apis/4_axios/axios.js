// Axios uses fetch behind the scenes however when using the library we call axios.get() instead of fetch().
// Axios parses the JSON (res.json()) for us, unlike fetch and XHR.
// ? axios
//   .get("https://swapi.dev/api/people/7/")
//   .then((res) => {
//     console.log("RESPONSE:", res);
//   })
//   .catch((e) => {
//     console.log("ERROR:", e);
//   });

// * Refactor above to be async.
const getSWPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (err) {
    console.log("ERROR:", err);
  }
};

getSWPerson(5);
getSWPerson(10);

// * Headers and Axios.
// Select the ul we will be appending jokes to.
const jokes = document.querySelector("#jokes");
// Select the button.
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    // You can pass a second argument into axios.get() which contains config info for headers.
    // Pass in the "headers" object as the config in the second argument.
    // You can add to the end of the config with a comma if you need to add more headers or other config types.
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    // This particular API requires us to set headers to Accept:application/json. Some APIs will require you to add /json to end of the endpoint and sometimes you need to add a query to the end of the endpoint.
    // ? console.log(res);
    // ? console.log(res.data.joke);

    // getDadJoke function exists only to return the joke text, but also returns a Promise. Therefore we can make the above function addNewJoke() an async function which awaits getDadJoke() function.
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

// Function will request a new joke
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  // Create new li element.
  const newLI = document.createElement("LI");
  // Append the data for jokes from API or jokeText.
  newLI.append(jokeText);
  // Append new li to the ul with id of jokes.
  jokes.append(newLI);
};

// Event listener for button click and run the addNewJoke() function.
button.addEventListener("click", addNewJoke);

getDadJoke();
