console.log("Lecture 3");

function getUsername(getAge) {
  const data = { username: "Avi" };
  //callback = getAge
  getAge(data, getGrade);
}

function getAge(data, getGrade) {
  //callback = getGrade
  getGrade({ ...data, age: 21 }, getPercentage);
}

function getGrade(data, getPercentage) {
  //callback = getPercentage
  getPercentage({ ...data, grade: "A+" }, printData);
}

function getPercentage(data, printData) {
  // callback = printData
  printData({ ...data, percentage: "90%" });
}

function printData(data) {
  console.log("DATA>>>", data);
}

getUsername(getAge);
