console.log("github");
const pageNumberH3 = document.getElementById("pageNumber");
var pageNumber = 1;

async function fetchData(pageNumber) {
  const response = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
  );
  const data = await response.json();
  console.log("DATA", data);
}

// var url_string = window.location.href;
// var url = new URL(url_string);

// var mySearch = url.searchParams.get("q");

// const myInput = document.getElementById("search-input");
// myInput.value = mySearch;

function loadNext() {
  pageNumber++;
  if (pageNumber == 2) {
    document.getElementById("load_prev").disabled = false;
  }
  pageNumberH3.innerText = pageNumber;
  fetchData(pageNumber);
}

function loadPrev() {
  if (pageNumber == 2) {
    document.getElementById("load_prev").disabled = true;
  } else {
    document.getElementById("load_prev").disabled = false;
  }
  pageNumber--;
  pageNumberH3.innerText = pageNumber;
  fetchData(pageNumber);
}

fetchData(1);
