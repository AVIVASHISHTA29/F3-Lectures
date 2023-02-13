let globalProducts;

async function myAsyncFunction() {
  const response = await fetch("https://dummyjson.com/products"); //1
  const data = await response.json(); //1
  globalProducts = data.products; //2seconds
}

console.log("globalProducts>>>>", globalProducts);

async function mainFunction() {
  await myAsyncFunction();
  //   gap 2 seconds
  console.log("globalProducts>>>>", globalProducts);
}

mainFunction();
// myAsyncFunction();
