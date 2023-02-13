async function myAsyncFunction() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const myProducts = data.products;

  console.log(myProducts);
}

myAsyncFunction();
