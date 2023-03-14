// Main goal is to take some array a reduce it down to a single value.
// Takes two parameters (i.e. accumulator and currentvalue). The accumulator is the thing we are reducing down to. Currentvalue represents each element ij the array.
// Return accumulator + current value and each run of the function accumulates the value plus the currentvalue.

// EXAMPLE
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// Can use for loop.
// let total = 0;
// for (const price of prices) {
//   total += price;
// }
// console.log(total);
// OR
const total = prices.reduce((totals, price) => {
  return totals + price;
});
console.log(total);

// Can also use it to determine min value in array.
const minPrice = prices.reduce((min, curPrice) => {
  if (curPrice < min) {
    return curPrice;
  }
  return min;
});
console.log(minPrice);
