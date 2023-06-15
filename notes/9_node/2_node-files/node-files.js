for (let i = 0; i < 10; i += 1) {
  console.log("HELLO!!!");
}

// With node we do not need to run this in the browser or create an index.html to reference the script. Move to the directory with the JS file and type ```node [filename.js]```
// Errors are handled within the terminal as well for node running JS.

// Typing in ```node``` and then ```process``` will list out the large process object in node. You can list version (process.version) or release (process.release). There are methods such as: process.cwd() to list the current working directory (path).

// Main focus method is ```process.argv``` which is not useful in the node repl, but can be used in a script.
console.log("Hello, from args"); // Which can be executed with ```node [the file the code is in]```
// When we run the following code we get the process.argv which we saw in node but also the path to the file. The first path is the process exec path which is where the node executable is and the second path will be the file we are executing.
console.log(process.argv);

// You can add things to the node argv array by typing: ```node [your script file] [first addition] [second addition]``` similar to how we pass things to the unix terminal (i.e. mkdir or ls -a). The first two items will remain the same in the array though (executable path and file path).

// Below will be a script that says hello to each argument we pass in.
// slice(2) will slice after the first two arguments or paths onwards.
const args = process.argv.slice(2);
// Loop over args.
for (const arg of args) {
  console.log(`Hi there, ${arg}`);
}
// Then within the terminal run ```node node-files.js Evan Isla```
