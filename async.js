let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 1 Resolved");
    resolve("Promise 1");
  }, 500);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 1 Resolved");
    resolve("Promise 2");
  }, 1000);
});

async function myAsyncFunction() {
  console.log("function running...");
  const res = await promise1.catch((e) => console.log(e));
  if (res.data) {
    console.log("res1", res);
    const res2 = await promise2;
    if (res2) {
      console.log("res2", res2);
    }
  }
  //   const res = await promise1.catch((e) => {
  //     console.log("err", e);
  //   });
}

myAsyncFunction();

// function myNormalFunction() {
//   console.log("1");
//   promise1.then((res) => {
//     console.log("res");
//   });
//   console.log("2");
// }

// myNormalFunction();
