// DESTRUCTURING FROM ARRAYS

const scores = [992334, 899984, 776554, 546778, 234432, 112346];
// Take the first and second value in array and assign them a variable.
// const highScore = scores[0];
// const secondHighScore = scores[1];

// However the above can be achieved in shorter way using destructuring.
// const [gold, silver] = scores;
// console.log(gold);
// console.log(silver);

// You can even use rest to destruct everyone else.
const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);

// DESTRUCTURING FROM OBJECTS

const user = {
  email: "evanmarshall1986@gmail.com",
  password: "crappypass",
  firstName: "Evan",
  lastName: "Marshall",
  born: 1986,
  died: 2569,
  bio: "Just a tall handsome ginger with a fire in his pantaloons.",
  city: "Halifax",
  province: "Nova Scotia",
};

// const firstName = user.firstName;
// const lastName = user.lastName;

// Instead it can be destructured.
// Order doesn't matter like arrays, but there needs to be a key in the object to match.
const { email, firstName, lastName, city, bio } = user;
console.log(email);
console.log(firstName);
console.log(lastName);
console.log(city);
console.log(bio);

// If you want to rename the variable something different than the object property name.
const { born: birthYear } = user;
console.log(birthYear);

// You can add default values as well, using the equal sign.
const user2 = {
  herEmail: "dumbass@gmail.com",
  firstName: "Bertha",
  lastName: "Baddie",
  herBorn: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

const { herEmail, herBorn, herDied = "N/A" } = user2;
console.log(herEmail);
console.log(herBorn);
console.log(herDied);

// DESTRUCTURING PARAMETERS
