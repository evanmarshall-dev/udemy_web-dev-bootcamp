// Functions are reusable chunks of code.
// Example of code which we could reuse a lot:
// const dice1 = Math.floor(Math.random() * 6) + 1;
// Above code snippet is trying to get a dice roll from 1 to 6.
// You can set it to a variable, but if you needed to get for example 6 different dice then you would have to write the above snippet 6 times each with different variable names.
// Instead it would be better to write code which would call, for example: let dice1 = rollDice(); and call that whenever we want to roll a dice.
// We could also take it one step further and throw in dice with more sides into the equation. This would be a function accepting an input, for example let dice1 = rollDice(12);
