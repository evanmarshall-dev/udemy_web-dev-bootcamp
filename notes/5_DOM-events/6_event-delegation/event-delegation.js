// Select all li's
// const lis = document.querySelectorAll("li");
// for (const li of lis) {
//   // Delete li when clicked.
//   // But does not see into the future so does not work on newly created li's from form and they do not have event listeners.
//   // This is fixed by adding event delegation which adds listener to a parent element.
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

// Select tweet form by ID.
const tweetForm = document.querySelector("#tweetForm");
// Select list for tweets.
const tweetsContainer = document.querySelector("#tweets");

const addTweet = (username, tweet) => {
  // Add a list item.
  const newTweet = document.createElement("li");
  // Add a bold element.
  const bTag = document.createElement("b");
  // Append username to newly created bold element.
  bTag.append(username);
  // Append the username to a list item.
  newTweet.append(bTag);
  // Append a dash and tweet argument to list item.
  newTweet.append(`- ${tweet}`);
  // Append the list item to the tweets container.
  tweetsContainer.append(newTweet);
};

// Listen for submit button click on form.
tweetForm.addEventListener("submit", function (e) {
  // Prevent default form submit behaviour.
  e.preventDefault();
  // Assign elements of username to tweetform to variable.
  const userNameInput = tweetForm.elements.username;
  // Assign elements of tweet to tweetform.
  const tweetInput = tweetForm.elements.tweet;
  // Add above username input value to above function addtweet.
  addTweet(userNameInput.value, tweetInput.value);
  userNameInput.value = "";
  tweetInput.value = "";
});

tweetsContainer.addEventListener("click", function (evt) {
  // console.log("CLICK ON UL");
  // // Shows the event and the "target" property as an li.
  // console.log(evt);
  // target.nodeName equal to li confirms that li target is being removed and then removes it.
  // Short for if target is li.
  // evt.target.nodeName === "li" && evt.target.remove();
  evt.target.remove();
});
