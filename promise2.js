let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Password is correct...", success: true });
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User Data Found...");
    // reject(new Error("Not Found",code:404))
  }, 3000);
});

function login() {
  console.log("Logging in...");

  promise1
    .then((response) => {
      console.log(response.data);
      if (response.success) {
        promise2.then((response2) => {
          console.log(response2);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// Promise Chaining
