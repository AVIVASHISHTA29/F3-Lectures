console.log("Promise Methods");

let promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1");
    }, 1500);
  });
};

let promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Promise2");
      resolve("promise 2");
    }, 2500);
  });
};

let promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise3");
    }, 3500);
  });
};

Promise.all([promise1(), promise2(), promise3()])
  .then((res) => {
    console.log("Res", res);
    // thankyou();
  })
  .catch((e) => {
    console.log("Error", e);
  });

// function thankyou() {
//   alert("Thankyou");
// }
