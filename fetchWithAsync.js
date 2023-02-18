let globalProducts;
let myDiv = document.getElementById("flex-container");

document.getElementById("myLoader").style.display = "flex";

async function myAsyncFunction() {
  const response = await fetch("https://dummyjson.com/products"); //1
  const data = await response.json(); //1
  if (data) {
    document.getElementById("myLoader").style.display = "none";
  }
  newHtml = data.products.map((product, i) => {
    console.log("PRODUCT DETAILS", product.title, i);
    return `
      <div class='product-container'>
          <h1>${i}-${product.title}</h1>
      </div>
    `;
  });
  myDiv.innerHTML = newHtml.join("");
}

setTimeout(myAsyncFunction, 2000);
