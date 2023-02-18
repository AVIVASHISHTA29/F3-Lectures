console.log("Map");
const myArr = [10, 35, 19, 20];

// var total = 0;
// myArr.map((number) => {
//   total += number;
// });

// console.log("Total", total);

// const myTotal = myArr.reduce((total, number) => {
//   console.log("Current Total", total);
//   console.log("Current Number", number);
//   return total + number;
// }, 0);

// console.log("Total", myTotal);

const students = [
  { name: "Avi", height: 180 },
  { name: "Jayesh", height: 170 },
  { name: "Aryan", height: 175 },
];

const tallestHeight = students.reduce(
  (previouslyTallestHeight, currentStudent) => {
    if (previouslyTallestHeight > currentStudent.height) {
      return previouslyTallestHeight;
    } else {
      return currentStudent.height;
    }
  },
  0
);

console.log("tallestheight", tallestHeight);
