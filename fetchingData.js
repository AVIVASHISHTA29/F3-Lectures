console.log("Fetching Data");

// FETCH is this method that we use to GET data by default from the url that we pass in the param

// FETCH API returns a RESPONSE object.

// The response.json() method reads the data returned by the server and returns a Promise.

// fetch("https://dummyjson.com/quotes")
//   .then((response) => response.json())
//   .then((data) => {
// DO WHATEVER YOU WANT TO WITH THAT DATA
// });

// fetch("https://dummyjson.com/quotes")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("DATA>>>", data);
//     let myArr = data.quotes;
//     let myDiv = document.getElementById("results");
//     myArr.map((quote) => {
//       myDiv.innerHTML += `<p><strong>${quote.id} - ${quote.author} </strong> ${quote.quote}</p>`;
//     });
//   });

fetch("https://dummyjson.com/quotes/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let myDiv = document.getElementById("results");
    myDiv.innerHTML = `<p><strong>${data.id} - ${data.author} </strong> ${data.quote}</p>`;
  });
