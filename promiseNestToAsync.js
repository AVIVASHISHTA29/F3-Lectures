let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "", success: false });
    // reject("Password incorrect");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User Data Found...");
    // reject(new Error("Not Found",code:404))
  }, 3000);
});

async function login() {
  console.log("Logging in...");

  // promise1
  //   .then((response) => {
  //     console.log(response.data);
  //     if (response.success) {
  //       promise2.then((response2) => {
  //         console.log(response2);
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    const data1 = await promise1;
    console.log("DATA1>>>", data1);
    if (data1.success) {
      const data2 = await promise2;
      console.log("DATA2>>>", data2);
    } else {
      console.log("Password incorrect, no data and success was false");
    }
  } catch (e) {
    console.log("Error");
  }
}

login();
