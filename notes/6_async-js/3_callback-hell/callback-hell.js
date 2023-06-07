// We want to delay the change in background color using setTimeout web API.
// setTimeout with a callback function and delay of 1 second.
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000);
// // Make orange 1 second later.
// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 2000);
// // And yellow after another 1 second.
// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 3000);
// An easier way instead of manually calculating the math is NESTING.
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// If you wanted to re-use the above code and maybe different delays then you can put it in a function.
// Need to pass in the color you want to change to as an argument (newColor), the delay and what you are going to do next or the calback (doNext)
const rainbowColor = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    // Execute doNext after the color change. This basically replicates what we did above with nesting.
    // doNext and doNext(); will make it so that it is undefined if you do not add a 3rd argument.
    doNext && doNext();
  }, delay);
};
// To use the function you call it with newColor and delay values.
// If you want more than one you need to nest the function call using callbacks. You then pass int he 3rd argument as a function.
rainbowColor("red", 1000, () => {
  // console.log("INSIDE CALLBACK");
  rainbowColor("orange", 1000, () => {
    rainbowColor("yellow", 1000, () => {
      rainbowColor("green", 1000, () => {
        rainbowColor("blue", 1000, () => {
          console.log("Oooohh, double rainbow!!");
        });
      });
    });
  });
});

// ? This is common practice when you need code to run after the original code is finished. Such as calling on movie info from a movie API. It will use a callback and not run code until callback completes.
// For Example (CALLBACK HELL - When things get very nested and deep, which is a problem you cannot quite get around):
// ? Promises and Async functions help alleviate this.
// Search for info on Inception and run callback function. After the callback it will save info to my database.
// searchMoviesAPI("Inception", () => {
//   // That might take time as well to save to my database and it may or may not work.
//   // This is why you usually have two callbacks passed into a function (a success and a failure).
//   saveToMyDB(movies, () => {
//     // If it works, run this:
//   }, () => {
//     // If it does not work, run this:
//   })
// }, () => {
//   // Another callback in case the API call does not work.
// })
