// Import each object into an index.js and stored the imports into an array.
const blue = require("./blue");
const janet = require("./janet");
const sadie = require("./sadie");

const allCats = [blue, janet, sadie];
// ? console.log(allCats);

// We want to require all contents of the directory shelter, which is more common than each individual file in that directory.
// Index.js is the key as it is the entry point of a directory. Whatever the index file exports will be what the directory exports.

module.exports = allCats;
