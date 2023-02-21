console.log("Session");

localStorage.setItem("darkmode", "false");

window.addEventListener("storage", (e) => {
  console.log(e);
});

document.cookie = "key=value";
document.cookie = "key2=value2";
document.cookie = "key3=value3";

var myCookies = document.cookie;
myCookies.split(";").map((cookie) => {
  console.log("cookie", cookie);
});
