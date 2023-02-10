console.log("Lecture 3 - promise Chain");

function getUsername() {
  return new Promise((resolve, reject) => {
    console.log("1");
    resolve({ username: "Avi" });
  });
}

function getAge(data) {
  return new Promise((resolve, reject) => {
    console.log("2");
    // resolve({ ...data, age: 21 });
    reject("Couldnt get percentage sorry");
  });
}

function getGrade(data) {
  return new Promise((resolve, reject) => {
    console.log("3");
    resolve({ ...data, grade: "A+" });
  });
}

function getPercentage(data) {
  return new Promise((resolve, reject) => {
    console.log("4");
    resolve({ ...data, percentage: "90%" });
  });
}

function printData(data) {
  console.log("DATA>>>", data);
}

// getUsername -> getAge -> getGrade -> getPercentage -> PrintData

// getUsername()
//   .then((data1) => getAge(data1))
//   .then((data2) => getGrade(data2))
//   .then((data3) => getPercentage(data3))
//   .then((data4) => printData(data4))
//   .catch((e) => {
//     console.log("ERROR>>>", e);
//   });

getUsername()
  .then((data1) => getAge(data1))
  .then((data2) => getGrade(data2))
  .then((data3) => getPercentage(data3))
  .then((data4) => printData(data4))
  .catch((e) => {
    console.log("ERROR>>>", e);
  });

// getUsername()
//   .then((data) => {
//     console.log("1");
//     return getAge(data);
//   })
//   .then((data2) => {
//     console.log("2");
//     return getGrade(data2);
//   })
//   .then((data3) => {
//     console.log("3");
//     return getPercentage(data3);
//   })
//   .then((data4) => {
//     console.log("4");
//     return printData(data4);
//   });
