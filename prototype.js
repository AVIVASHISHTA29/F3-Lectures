// const obj = new Object({ name: "hi" });
// console.log(obj);

const arr2 = [
  { id: 1, name: "Avi" },
  { id: 2, name: "Rahul" },
];
console.log(arr2);

// const str = new String("Hi Hello How Are You?");
// console.log(str);

Array.prototype.showNames = function () {
  return this.map((item) => item.name);
};

console.log("showing Numbers", arr2.showNames());

// const arr3 = new Array(1, 2, 3, 4);
// console.log(arr3.map);

// Array.prototype.map = function () {

// };

const obj1 = {
  name: "Avi",
  getAge: function () {
    return "My Age is " + this.age;
  },
};

const obj2 = {
  age: 22,
  __proto__: obj1,
};

console.log(obj2.getAge());
console.log(obj2.name);
console.log(obj2);

const newUsers = [
  { id: 1, name: "Supriyo" },
  { id: 2, name: "Akshay" },
];

function showNames(arr) {
  return arr.map((item) => item.name);
}

console.log(newUsers.showNames());

console.log(showNames(newUsers));

// const metroIndia = {
//   getLines: function () {},
// };
// const metroDelhi = {
//   __proto__: metroIndia,
// };
// const metroMumbai = { __proto__: metroIndia };
// const metroBangalore = { __proto__: metroIndia };

// metroDelhi.getLines();

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, speak) {
    super(name);
    this.speak = speak;
  }
}

const doggy = new Dog("Tommy", "Bark");
console.log(doggy);
