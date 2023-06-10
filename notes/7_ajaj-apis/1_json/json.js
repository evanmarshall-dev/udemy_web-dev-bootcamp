// The below JSON output is a string of text and cannot be used with JavaScript without using a particular method.

const data = `{"ticker":{"base":"BTC","target":"USD","price":"11203.95559309"},"success":true,"error":""}`;

// JSON.parse will parse JSON into a JS object.
// console.log(JSON.parse(data));
const parsedData = JSON.parse(data);

// Access value from JS object.
console.log(parsedData.ticker.price);

// Can also convert JS object into JSON. It is useful when we need to send info TO an API.
const dog = { breed: "lab", color: "black", isAlive: "true", owner: undefined };

// Stringify method accomplishes this.
console.log(JSON.stringify(dog));
