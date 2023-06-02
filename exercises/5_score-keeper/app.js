// Refactor code.
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
const winScoreSelect = document.querySelector("#playTo");

// Keep track of whatever the initial score of p1 is.
// let p1Score = 0;
// let p2Score = 0;
// Create variable for the score played to as the winning score.
let winScore = 3;
// In order to stop logic as soon as either player reaches winScore or whether we are playing the game or not (yes or no) a.k.a. a boolean.
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// Switch below from p1Button to p1.button to utilize the above object.
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
  // if (!isGameOver) {
  // When p1Button is clicked we add 1 to the value.
  // p1Score += 1;
  // Put the if statement for when p1Score is at winning score let isGameOver to switch from false to true. This is before adding to p1Display so that if the condition is met (p1Score equals winScore) then the code stops running on click before updating the h1 element.
  // if (p1Score === winScore) {
  //   isGameOver = true;
  //   p1Display.classList.add("has-text-success");
  //   p2Display.classList.add("has-text-danger");
  //   p1Button.disabled = true;
  //   p2Button.disabled = true;
  // }
  // Update the h1 or p1Display with the new value of p1Score.
  // p1Display.textContent = p1Score;
  // }
});

// Duplicate above code for p2.
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
  // if (!isGameOver) {
  //   p2Score += 1;
  //   if (p2Score === winScore) {
  //     isGameOver = true;
  //     // Add winner color.
  //     p2Display.classList.add("has-text-success");
  //     p1Display.classList.add("has-text-danger");
  //     p1Button.disabled = true;
  //     p2Button.disabled = true;
  //   }
  //   p2Display.textContent = p2Score;
  // }
});

// move resetButton into it's own function so I can call it in winScoreSelect.
// Can rewrite below as p1 or p2.value or use a for loop.
function reset() {
  isGameOver = false;
  for (const p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  // p1Score = 0;
  // p1.score = 0;
  // p2Score = 0;
  // p1.score = 0;
  // p1Display.textContent = 0;
  // p1.display.textContent = 0;
  // p2Display.textContent = 0;
  // p2.display.textContent = 0;
  // p1Display.classList.remove("has-text-success", "has-text-danger");
  // p1.display.classList.remove("has-text-success", "has-text-danger");
  // p2Display.classList.remove("has-text-danger", "has-text-success");
  // p2.display.classList.remove("has-text-danger", "has-text-success");
  // p1Button.disabled = false;
  // p1.button.disabled = false;
  // p2Button.disabled = false;
  // p2.button.disabled = false;
}

winScoreSelect.addEventListener("change", function () {
  // alert("CHANGE");
  // Get the value out.
  // Turn it into a number instead of a string which this.value is. This is done using parseInt.
  // alert(this.value);
  winScore = parseInt(this.value);
  reset();
});

// Call reset function. Do not execute it with ().
resetButton.addEventListener("click", reset);
// isGameOver = false;
// p1Score = 0;
// p2Score = 0;
// p1Display.textContent = 0;
// p2Display.textContent = 0;
