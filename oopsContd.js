console.log("Oops contd.");

class Vehicle {
  #tax;
  constructor(name, maker, engine, price) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
    this.price = price;
  }

  showDetails() {
    return `The name of the bike is ${this.name}.`;
  }

  setNameFnc(value) {
    this.name = value;
  }

  get getName() {
    return `${this.name.toUpperCase()}`;
  }

  set setName(value) {
    this.name = value;
  }

  set setTax(value) {
    this.#tax = value;
  }
}

Vehicle.prototype.abc = function () {
  return "";
};

let bike1 = new Vehicle("hayABusa", "Suzuki", "1340cc", "90000");

console.log(bike1);
console.log("name>>>", bike1.name);
console.log("showDetails>>>", bike1.showDetails());
console.log("getter>>>", bike1.getName);

bike1.setNameFnc("BMW");
console.log("New Bike Name>>>", bike1);

bike1.setName = "BMW2";
bike1.setTax = "10000";
console.log("New Bike2 Name>>>", bike1);

// class Something {
//   #property;

//   constructor() {
//     this.#property = "test";
//   }

//   #privateMethod() {
//     return "hello world";
//   }

//   getPrivateMessage() {
//     return this.#property;
//   }
// }

// const instance = new Something();
// console.log(instance);
