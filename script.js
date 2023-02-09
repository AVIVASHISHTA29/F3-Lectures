let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: ["result1", "result2", "result3", "result4"],
      status: "200 OK",
    });
  }, 5000);

  //   reject(new Error("error message"))
});

function search() {
  console.log("Searching...");

  myPromise
    .then((response) => {
      const myArray = response.data;
      let pTag = document.getElementById("results");
      myArray.map((result) => {
        console.log(result);
        pTag.innerHTML += result;
      });
    })
    .catch((error) => {
      console.log(error);
      console.log(myPromise);
    });
}

// Promise Chaining
