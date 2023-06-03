console.log("I printed first");
setTimeout(() => {
  console.log("I print after 3 seconds");
}, 3000);
console.log("I printed second");

// JavaScript can only run one line of code at a time (single threaded). So the above code runs the first console.log then the third and finally the second one after 3 seconds. The code doesn't just sit there for 3 seconds without doing anything because JS hands this process off to the browser's WebAPI. The webAPI function is the setTimeout(). When JS sees this it then passes it off to the browser to set a timer for 3 seconds then remind JS to run the console.log. During this handoff and timer
