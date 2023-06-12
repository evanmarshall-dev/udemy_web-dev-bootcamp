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
