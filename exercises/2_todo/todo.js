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
let input = prompt("What would you like to do?");
const todos = ["Collect chicken eggs", "Clean litter box"];

// STEP #1. Setting up quit scenario.
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    // We want to print out each item from todos array with index.
    // STEP #2. List out todos from array.
    console.log("*********************");
    for (let i = 0; i < todos.length; i += 1) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*********************");
    // Else if will prompt user for new input which pushes to the todos array.
    // STEP 3. Add new todo to array.
  } else if (input === "new") {
    const newTodo = prompt("What is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    // First ask what you are deleting.
    const index = parseInt(prompt("Enter an index to delete:"));
    // ParseINT converts above user entered prompt into a number or else it is NaN.
    // Below code looks to see if index user entered value is not NaN (therefore is a number) then we will run the splice code below and delete the index from array (todos list). This uses new method called isNaN which checks if something is not a number.
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted ${deleted[0]}`);
    } else {
      console.log("Error, this index does not exist");
    }
    // Errors occur with strings. If string of number will convert to that number or else defaults to index 0.
    // Use splice to remove at that index.
    // Splice uses two parameters, first to state index and second to state how many items to delete.
  }
  input = prompt("What would you like to do?");
}
console.log("You quit the app");
