const fs = require("fs");
// TODO: Change the "#_module-topic" to the numbered learning topic in sequence to the course (i.e. notes/6_node-lectures).
const nodePath = "notes/11_express";
const folderName = process.argv[2] || "#_lecture-name";

try {
  // Create topic folder.
  fs.mkdirSync(`${nodePath}`);
  // Create lecture folder.
  fs.mkdirSync(`${nodePath}/${folderName}`);
  // Create files.
  fs.writeFileSync(
    `${nodePath}/${folderName}/index.html`,
    `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>{Change This to Topic Title}</title>
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

// TODO: To run this script and create folder and files run the following in the terminal: node create-dir.js {REPLACE THIS WITH THE NAME OF THE #_lecture-name} OR nf {REPLACE THIS WITH THE NAME OF THE #_lecture-name} when using .zshrc aliases.
