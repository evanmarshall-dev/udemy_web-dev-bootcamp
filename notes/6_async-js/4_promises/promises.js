// ? const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };

// Similar logic would be when you map over an array. The function takes an parameter such as "element" which automatically takes and argument. This is the same as the above callbacks. For the above there is a failure message and a success message passed to the callbacks. For example:
/**
 * ? arr.map(function(element) {})
 */

// Call first function and its three arguments. The last two arguments are callbacks (success and failure).
// ? fakeRequestCallback(
//   "books.com/page-1",
//   function (response) {
//     console.log("It worked!");
//     // The automatic argument passed to the first callback is the success message from above and is printed to the console using response.
//     console.log(response);
//     // Let's say we want to run another callback if the first is a success.
//     // We have to pass in another fakeRequestCallback with three arguments again. It gets pretty nested.
//     fakeRequestCallback(
//       "books.com/page-2",
//       function (response) {
//         console.log("It worked, again!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page-3",
//           function (response) {
//             console.log("Annnnnd, again!");
//             console.log(response);
//           },
//           function (error) {
//             console.log("Error! (3rd Request)", error);
//           },
//         );
//       },
//       function (error) {
//         console.log("Error! (2nd Request)", error);
//       },
//     );
//   },
//   function (error) {
//     console.log("Error!", error);
//   },
// );

// All of the above code with success and error callbacks and nesting was how we commonly made requests in the past. Now, the below code, shows how PROMISES have fixed it. A promise is a promise of an eventual value that may or may not work out. The below code does the same as above fakeRequestCallback EXCEPT that it does not use callbacks.

// ? const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     // Delay Math method is a random number from 500ms to 5000ms.
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       // If delay is greater than 4000ms then call failure callback.
//       if (delay > 4000) {
//         reject("Your fake request's connection timed out :(");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// If I call the above fakeRequestPromise it will return a Promise with status "pending". If I save the fakeRequestPromise to a variable and call it again then it will say status resolved.
// A promise can have three states: pending, resolve and rejected.
// ? fakeRequestPromise("jlkerlkfekfjr");

// You can run code when the promise is rejected or resolved. This involves passing in a callback to the Promise itself rather than passing callbacks into a function.

// const request = fakeRequestPromise("yelp.com/api/coffee");
// ? fakeRequestPromise("yelp.com/api/coffee/page1")
//   // Run code if Promise is resolved.
//   .then(() => {
//     console.log("It worked!! (page1)");
//     // Say I want to make another request.
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked!! (page2)");
//         // And a third request.
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("It worked!! (page3)");
//           })
//           .catch(() => {
//             console.log("Oh no, error! (page3)");
//           });
//       })
//       .catch(() => {
//         console.log("Oh no, error! (page2)");
//       });
//   })
//   // Run code if Promise is rejected.
//   .catch(() => {
//     console.log("Oh no, error! (page1)");
//   });

// The above code is not much better than before. Instead of passing callback functions into the main request function we are using then and catch and passing them into those.
// That can be fixed by simply returning the following request functions so your .then does not need to be nested.
// ! So the key is "returning" the fakeRequestPromise.

// ? fakeRequestPromise("yelp.com/api/coffee/page1")
//   // We wrote data in the above function which can be passed into our .then. Also data from the request rejection can be passed into the .catch as err.
//   .then((data) => {
//     console.log("It worked!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("It worked!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("It worked!! (page3)");
//     console.log(data);
//   })
//   // A single .catch can be used for all of these.
//   .catch((err) => {
//     console.log("Oh no, a request failed!");
//     console.log(err);
//   });

// * Walkthrough: How to make a promise.
// Start with Promise() and it expects a function passed in.
// The passed in function ALWAYS has two parameters (usually called resolve and reject).
// new Promise((resolve, reject) => {
//   // If resolve or reject is called immediately then the Promise has status resolved or reject, respectively. If you call nothing within the promise is will remain status pending until resolve or reject is called.
// ? resolve();
// ? reject();
// });

// Let's demonstrate with the fakeRequest variable function.
const fakeRequest = (url) => {
  // Return new promise and allow 1 second to resolve.
  return new Promise((resolve, reject) => {
    // To test a random resolve or reject we will use Math method and use if function.
    const rand = Math.floor(Math.random());
    setTimeout(() => {
      if (rand < 0.5) {
        resolve(`Your fake data from ${url} goes here`);
      }
      reject("Request error");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request");
    console.log("Data is:", data);
  })
  .catch((err) => {
    console.log("Opps", err);
  });

// Can rewrite the setTimeout and doNext function from callback hell lecture using promises.

const rainbowColor = (color, delay) => {
  // ? return new Promise((resolve, reject) => {
  // Removed reject to pass linting.
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// Pass in color red and 1 second delay.
// ? rainbowColor("red", 1000).then(() => {
//   return rainbowColor("orange", 1000);
//   // Now if I return the promise within .then I can chain them together.
// });

// ! Can also write on one line and use an implicit return.
rainbowColor("red", 1000)
  .then(() => rainbowColor("orange", 1000))
  .then(() => rainbowColor("yellow", 1000))
  .then(() => rainbowColor("green", 1000))
  .then(() => rainbowColor("blue", 1000))
  .then(() => rainbowColor("indigo", 1000))
  .then(() => rainbowColor("violet", 1000));
