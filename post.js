// const myPost = {
//   title: "F3 - Lectures",
//   body: "F3 Lectures are going good",
//   userId: 1,
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(myPost),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     description: "THIS IS THE CUSTOME PENCIL THAT BMW GIVES",
//     price: 123462,
//     rating: 5,
//     stock: 10,
//     brand: "BMW",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// obj1 = {
//   title: "iPhone Galaxy +1",
//   desc: "",
//   price: "",
// };

// obj2 = { title: "uopdated ttiel" };

// fetch("https://dummyjson.com/products/1", {
//   method: "PUT" /* or PATCH */,
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ title: "uopdated ttiel" }),
// })
//   .then((res) => res.json())
//   .then(console.log);

// fetch("https://dummyjson.com/prod/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data));
