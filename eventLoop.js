console.log("1");

setTimeout(function timerFunction() {
  console.log("Timer Done!");
}, 0);

console.log("2");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then(function showData(data) {
    console.log("DATA", data);
  });
