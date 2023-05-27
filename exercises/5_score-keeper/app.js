const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

// Keep track of whatever the initial score of p1 is.
let p1Score = 0;
let p2Score = 0;
// Create variable for the score played to as the winning score.
const winScore = 5;
// In order to stop logic as soon as either player reaches winScore or whether we are playing the game or not (yes or no) a.k.a. a boolean.
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    // When p1Button is clicked we add 1 to the value.
    p1Score += 1;
    // Put the if statement for when p1Score is at winning score let isGameOver to switch from false to true. This is before adding to p1Display so that if the condition is met (p1Score equals winScore) then the code stops running on click before updating the h1 element.
    if (p1Score === winScore) {
      isGameOver = true;
    }
    // Update the h1 or p1Display with the new value of p1Score.
    p1Display.textContent = p1Score;
  }
});

// Duplicate above code for p2.
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
