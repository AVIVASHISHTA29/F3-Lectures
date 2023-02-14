let globalProducts;

async function myAsyncFunction() {
  const response = await fetch("https://dummyjson.com/products"); //1
  const data = await response.json(); //1
  globalProducts = data.products; //2seconds
}
