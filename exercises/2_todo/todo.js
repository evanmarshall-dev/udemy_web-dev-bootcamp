/*
TODO LIST
"new" - Add a TODO
"list" - List all TODOs
"delete" - Remove Specific TODO
"quit" - Quit App

METHOD
A while loop that loops while prompt input is not "quit"
Storage of the TODOs will be an array
Listing the TODOs will iterate over values in array, print out and with index
Delete will use index and splice method
*/

// alert("Testing Connection");
// STEP #1. Setting up quit scenario.
let input = prompt("What would you like to do?");
// const todos = ["Collect chicken eggs", "Clean litter box"];
while (input !== "quit" && input !== "q") {
  input = prompt("What would you like to do?");
}
console.log("You quit the app");
