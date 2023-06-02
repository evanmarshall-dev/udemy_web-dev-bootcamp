// const multiply = (x, y) => x * y;
// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// };
// isRightTriangle(3, 4, 5);

// 1. In the callstack the first this that needs to be evaluated is square of a or 3.
// 2. The square of 3 returns multiply 3 * 3, which is added to callstack.
// 3. Now we have to call multiply which is added to the callstack.
// isRightTriangle is waiting on the value of square(3), which is waiting on the value of multiply(3, 3), which gives us 9. At this point the number 9 is returned and then removed from the callstack, square has a value of 9, which is removed from the callstack. Finally isRightTriangle has a value of 9 for the chuck of code square(a). Now it moves onto the next which is square(b) or square(4) and the process repeats. This continues until we get the value for the final call, which is square(c) or square(5). Now that we have all of the values (9 + 16 === 25), the function can return true.

// ? Use loupe as a tool to visualize the callstack (http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D).
// Loupe does not like arrow functions, let or const so the above can be re-written as such:
function multiply(x, y) {
  return x * y;
}

function square(x) {
  return multiply(x * x);
}

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);

// ? You can also visualize this in the chrome dev tool debugger. Under "sources" tab (not console). Under "page" you can select your script file. Click to the left of the function call to create a breakpoint. When the code is re-run this breakpoint allows the script run to be paused so you can inspect. If you add code before or after the breakpoint then only the before code will run. Click the step buttons (arrow with dot) and under "callstack" the function isRightTriangle will be added. Keep clicking the step buttons and it will run through the code and add to the callstack. It will work it's way up the callstack until value received and then start removing.
