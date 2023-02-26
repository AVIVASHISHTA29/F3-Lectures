// Handling promise methods using promise chaining

// function promise1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise1");
//     }, 500);
//   });
// }

// function promise2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise 2");
//     }, 1000);
//   });
// }

// function promise3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise3");
//     }, 2000);
//   });
// }

// Promise.all([promise1(), promise2(), promise3()])
//   .then((res) => {
//     console.log("Res", res);
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });

// async function myPromiseHandler() {
//   const res = await Promise.all([promise1(), promise2(), promise3()]);
//   if (res) {
//     console.log("my Result", res);
//   }
// }

// myPromiseHandler();
