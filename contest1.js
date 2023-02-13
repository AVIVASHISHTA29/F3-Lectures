let myDiv = document.getElementById("flex-container");
let myProducts;

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // newHtml = data.products.map((product, i) => {
    //   console.log("PRODUCT DETAILS", product.title, i);
    //   return `
    //     <div class='product-container'>
    //     <div class="carousel-wrapper">
    //     <div class="carousel-inner">
    //         ${product.images
    //           .map((image, index) => {
    //             var active;
    //             if (index == 0) {
    //               active = true;
    //             }
    //             return `
    //                 <div class="carousel-item ${active ? "active" : ""}">
    //                     <img src="${image}"/>
    //                 </div>`;
    //           })
    //           .join("")}
    //     </div>
    //     </div>
    //         <h1>${i}-${product.title}</h1>
    //     </div>
    //   `;
    // });
    // myDiv.innerHTML = newHtml.join("");
    myProducts = data.products;
  });
