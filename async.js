// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promise 1 Resolved");
//     resolve("Promise 1");
//   }, 500);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promise 1 Resolved");
//     resolve("Promise 2");
//   }, 1000);
// });

// async function myAsyncFunction() {
//   console.log("function running...");
//   const res = await promise1.catch((e) => console.log(e));
//   if (res.data) {
//     console.log("res1", res);
//     const res2 = await promise2;
//     if (res2) {
//       console.log("res2", res2);
//     }
//   }
//   const res = await promise1.catch((e) => {
//     console.log("err", e);
//   });

//   try {
//     const res = await promise1;
//   } catch (e) {
//     console.log("err", e);
//   }
// }

// myAsyncFunction();

// function myNormalFunction() {
//   console.log("1");
//   promise1.then((res) => {
//     console.log("res");
//   });
//   console.log("2");
// }

// myNormalFunction();

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is resolved");
    }, 2000);
  });
}

async function handlingPromise() {
  console.log("Resolving...");
  // try {
  //   const ans = await myPromise();
  //   console.log(ans);
  // } catch (error) {
  //   console.log("ERROR", error);
  // }
  const ans = await myPromise().catch((e) => console.log("Error", e));
  if (ans) {
    console.log("Resolved>>>", ans);
  }
}

handlingPromise();

async function fecthingData() {
  console.log("fetching data....");
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  console.log(data);
}

fecthingData();
