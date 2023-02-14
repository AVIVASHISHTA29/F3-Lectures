console.log("callback Hell");

function getUsername() {
  return new Promise((resolve, reject) => {
    console.log("1");
    // reject("Error  because of connection");
    resolve({ username: "Avi" });
  });
}

function getAge(data) {
  return new Promise((resolve, reject) => {
    console.log("2");
    resolve({ ...data, age: 21 });
    // reject("Couldnt get percentage sorry");
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

async function ourAsyncFunction() {
  try {
    const data1 = await getUsername();
    console.log("DATA1", data1);
    const data2 = await getAge(data1);
    const data3 = await getGrade(data2);
    const data4 = await getPercentage(data3);
    printData(data4);
  } catch (e) {
    console.log("ERROR>>>", e);
  }

  //   const data1 = await getUsername().catch((e) => {
  //     console.log(e);
  //   });
  //   console.log("DATA1", data1);
  //   const data2 = await getAge(data1).catch((e) => {
  //     console.log(e);
  //   });
  //   const data3 = await getGrade(data2).catch((e) => {
  //     console.log(e);
  //   });
  //   const data4 = await getPercentage(data3).catch((e) => {
  //     console.log(e);
  //   });
  //   printData(data4);
}

ourAsyncFunction();
