const franc = require("franc");
const langs = require("langs");
// TODO: Un-comment when using. Had to comment out to pass linting. const colors = require("colors");

// Allows us to input the language phrase as an argument.
const input = process.argv[2];

// ? console.log(franc("Alle menslike wesens word vry"));
// ? const langCode = franc("Alle menslike wesens word vry");
// Rewrite using the 3rd argument from process.argv.
const langCode = franc(input);

// Error handling from docs.
if (langCode === "und") {
  console.log(
    "Sorry, could not determine language! Try again with more sample text."
      .brightRed,
  );
} else {
  const language = langs.where("3", `${langCode}`);
  console.log(`Our best guess is: ${language.name}`.green);
}
