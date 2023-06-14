// * Have to do with sub-classing or inheritance. It is how to share functionality between classes.
// * You can move the same type of methods from one class to another by creating one separate class that each of the two classes can EXTEND.
// Extending allows Cat and Dog to use the constructor in Pet as well as the eat() method.

class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  // If you want additional values passed to Cat.
  constructor(name, age, livesLeft = 9) {
    // Name and age already defined in Pet so only need livesLeft.
    // * So not to duplicate you would use the SUPER keyword, which references the class we are extending from.1
    console.log("IN CAT CONSTRUCTOR");
    super(name, age);
    this.livesLeft = livesLeft;
  }

  // Add method that does not exist on class Dog.
  meow() {
    return "MEOWWWWWW!";
  }
}

const monty = new Cat("Monty", 9);
console.log(monty); // Returns the Cat object.
console.log(monty.eat()); // Returns the returned value of eat().

// Another class.
class Dog extends Pet {
  bark() {
    return "WOOOOFF!";
  }

  // If there is another method of eat() in Dog that is the same as Pet then it will call the one in Dog.
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const wyatt = new Dog("Wyatt", 13);
console.log(wyatt); // Returns the Cat object.
console.log(wyatt.eat()); // Returns the returned value of eat().
