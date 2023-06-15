// You need to use a path to math.
// ? const math = require("./math");
// You can destructure if you only want certain objects from math.js. Then you do not need to put math.PI for example below.
const { PI, square } = require("./math");

// ? console.log(math);
console.log(PI);

// Running node app.js in the terminal will show what has been imported into app.js and now we have access to the objects from math.js.

// You can run functions from the exported scripts.
console.log(square(9));
