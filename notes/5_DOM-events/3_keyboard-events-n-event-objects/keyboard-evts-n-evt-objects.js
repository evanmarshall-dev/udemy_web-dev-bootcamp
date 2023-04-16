// Pass in e or evt or event into the callback function.
document.querySelector("button").addEventListener("click", function (evt) {
  // alert("CLICK");
  // print to console will show you things you can call on evt such as where you clicked (clientx and clienty)
  console.log(evt);
});

// Lets do keydown and keyup on input.
// In order to know which key is pressed we need to use the EVENT object.
const input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
  console.log("KEYDOWN");
  // printing the event will show keyboardevent object in the console.
  // pay particular attention to the "key" and "code" output.
  console.log(e);
  // code will output the KEY typed. This value will always remain the SAME no matter what keyboard type the user is using.
  console.log(e.code);
  // key will output the actual inputted value from pressing the key.
  console.log(e.key);
});

// input.addEventListener("keyup", function () {
//   console.log("KEYUP");
// });

// If you want to listen to keypress anywhere on the page you use window instead in the event listener.
window.addEventListener("keydown", function (event) {
  // in order to ignore all other keys pressed you can use a SWITCH statement.
  // console.log(event.code);
  // the below can also be achieve with a series of else if statements.
  switch (event.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    default:
      console.log("IGNORED!");
      break;
  }
});
