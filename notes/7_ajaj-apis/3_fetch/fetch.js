// Most basic usage is to call the function fetch and pass in the URL.
// Calling fetch() is the first part of the process and returns a Promise.
// You can then run then and catch. If the promise resolves then the .then will print data such as headers and status code to the console. There is also "body" data returned, but it does not show the API JSON data as expected because it returns immediately once a header is received and before it is resolved.

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     // In order to get the body data we need to read it and parse it. There is a method called .json which we use.
//     // We add the .json method to the fetch response (res) object and is not to be confused with parseJSON because it returns a promise.
//     // ? res.json().then((data) => {
//     //   ? console.log("JSON DONE!", data);
//     // ? });
//     // ! Above code REFACTOR TO:
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // Do not have to deal with messy nesting with fetch().
//     // If you want to make another request you would return fetch here.
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
// Fetch is in series so the first request has to be resolved or the second one will not even start. You could also make these request independently since they do not depend on each other but sometimes they do.

// * All of the above can be refactored even more by using the async function.
const loadSWPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/3/");
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/4/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

loadSWPeople();
// * The above code can be further refactored by adding a parameter such as "id" to the loadSWPeople function and add that as an argument to the end of the endpoint to replace the number. Then we wouldn't have to write pretty much duplicate code like above.
