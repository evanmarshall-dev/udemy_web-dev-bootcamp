// * An example of a node MODULE is called the FILE SYSTEM (fs). The methods work on the file system like fs.method (fs.mkdirSync()).
// LOGIC: Run ```node file-system.js Project``` to create a Project folder and within the folder node will create blank html, css and js files.
// There are two ways to work with node fs scripts. The asynchronous version and synchronous. Asynchronous version will stop all other code until one process is done, which is easier to follow logically.

// First, we need to define the below "fs".
const fs = require("fs");
// ? console.log(fs);
// Make path variable for common file path.
const nodePath = "notes/9_node";
// Define the folder name as the third argument (after executable path and file path) OR default to folder name of Project.
const folderName = process.argv[2] || "Project";

// ? fs.mkdir(`${nodePath}/4_node-test`, { recursive: true }, (err) => {
//   ? if (err) throw err;
// ? });
// Test that it is async.
// ? console.log("I COME AFTER MKDIR");

// * Add a try and catch for errors.
try {
  // Synchronous version of above.
  fs.mkdirSync(`${nodePath}/${folderName}`);

  // Now we will make the three files inside the folder.
  fs.writeFileSync(
    `${nodePath}/${folderName}/index.html`,
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title></title>
          <link rel="stylesheet" href="./style.css">
        </head>
        <body>
        <script src="./app.js"></script>
        </body>
      </html>
    `,
  );
  fs.writeFileSync(`${nodePath}/${folderName}/style.css`, "");
  fs.writeFileSync(
    `${nodePath}/${folderName}/app.js`,
    `
      console.log("HELLO WORLD");
    `,
  );
} catch (e) {
  console.log("SOMETHING WENT WRONG!");
  console.log(e);
}
