console.log("OOPS");

// var user1_firstname = "Avi";
// var user1_lastname = "Vashishta";
var user1_fullName = "Avi Vashishta";
var user1_email = "avi@gmail.com";
var user1_password = "12345678";
var user1_gender = "male";

var user2_firstname = "Avi_2";
var user2_lastname = "Vashishta_2";
var user2_email = "avi@gmail.com_2";
var user2_password = "12345678_2";
var user2_gender = "male";

var user1 = {
  firstname: "Avi",
  lastname: "Vashishta",
  email: "avi@gmail.com",
  password: "12345678",
  gender: "male",
};

var user2 = {
  firstname: "Avi_2",
  lastname: "Vashishta_2",
  email: "avi@gmail.com_2",
  password: "12345678_2",
  gender: "male",
};

function createUser(firstname, lastname, email, password, gender) {
  return {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    gender: gender,
  };
}

var user3 = createUser("Jayesh", "Sadhwani", "jaysh@gmail", "1234", "male");
console.log("USER3", user3);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");
// console.log("myfather", myFather);

// Object = Instance of a class

// object: real life entity
// class: blueprint

class Person {
  constructor(fullName, age, eye) {
    this.fullName = fullName;
    this.age = age;
    this.eyeColor = eye;
  }
}

// Create a Person object
const myFather = new Person("John Doe", 50, "blue");
const myMother = new Person("John 2", 49, "2");

// Adding properties to the person object
myFather.language = "Hindi";
console.log("myfather", myFather);

// Adding properties - function/method to the person object
myFather.name = function () {
  return this.fullName + " hi ";
};

console.log("Name is " + myFather.name());

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine, price) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
    this.price = price;
  }
  getDetails() {
    return `The name of the bike is ${this.name}.`;
  }

  getPrice() {
    return `The price of the bike is ${this.price}.`;
  }

  getEngine(makerFlag) {
    if (makerFlag) {
      return `The engine of the bike is ${this.engine} and the maker is ${this.maker}`;
    }
    return `The engine of the bike is ${this.engine}.`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc", "90000");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc", "100000");

console.log(bike1); // Hayabusa
console.log(bike2); // Kawasaki
console.log(bike1.getDetails());
console.log(bike1.getEngine(true));

class User {
  #password;
  constructor(name, email, age, password) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#password = password;
  }

  showDetails() {
    console.log(this.#comparePassword());
    return `${this.name},${this.#password}`;
  }

  #comparePassword() {
    return "comparing password...";
  }
}

const userAvi = new User("Avi", "avi@gmail.com", "22", "12343");
console.log("name", userAvi.name);
// console.log("password", userAvi.#password);
console.log("get Details", userAvi.showDetails());
// console.log("avi", userAvi.#comparePassword());

class Animal {
  constructor(name, eyes) {
    this.name = name;
    this.eyes = eyes;
    this.species = "new species";
  }
  speak() {
    return "Animal Speaks by saying - ";
  }
}

class Dog extends Animal {
  constructor(name, eyes, legs, teeth, tail) {
    super(name, eyes);
    this.legs = legs;
    this.teeth = teeth;
    this.tail = tail;
  }
  speak() {
    return `Animal Name = ${this.name} ${super.speak()} Woof...`;
  }
}

const myPet = new Dog("tommy", "brown", "4", "cannine", "curly");
console.log(myPet);
