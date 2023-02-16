console.log("OOPS");

var user1_firstname = "Avi";
var user1_lastname = "Vashishta";
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
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
console.log("myfather", myFather);
