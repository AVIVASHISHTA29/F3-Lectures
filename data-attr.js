const myDiv = document.getElementById("flex-container");

console.log("old", myDiv.dataset);

function setAttr() {
  myDiv.dataset.job = "instructor";
  console.log("data-attrs", myDiv.dataset.job);
}
