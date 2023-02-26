console.log("contest3");

function signupUser() {
  var email = document.getElementById("email-input").value;
  var password = document.getElementById("pass-input").value;
  var confirmPassword = document.getElementById("confirmpass-input").value;

  if (email && password && confirmPassword && password === confirmPassword) {
    var user = {
      email: email,
      password: password,
    };
    const users = localStorage.getItem("users");
    console.log("USERS", users);
    var usersArr = [];
    if (users) {
      usersArr = JSON.parse(localStorage.getItem("users"));
      if (usersArr.filter((user) => user.email === email).length == 0) {
        usersArr.push(user);
      } else {
        document.getElementById("error-message").innerText =
          "user with this email already exists";
      }
    } else {
      usersArr = [user];
    }
    localStorage.setItem("users", JSON.stringify(usersArr));
    window.location.href = "/login.html";
  }
}

function loginUser() {
  var email = document.getElementById("email-input").value;
  var password = document.getElementById("pass-input").value;

  if (email && password) {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    console.log("users", users);

    const userFromArr = users.filter((user) => user.email === email);
    console.log("userFromArr", userFromArr);

    if (userFromArr.length > 0) {
      if (userFromArr[0].password == password) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email: email,
            password: password,
            token: "myToken",
          })
        );
        window.location.href = "/dashboard.html";
      } else {
        document.getElementById("error-message").innerText =
          "Password is incorrect";
      }
    } else {
      document.getElementById("error-message").innerText =
        "User does not exist";
    }
  }
}

if (window.location.href == "http://127.0.0.1:5500/dashboard.html") {
  if (localStorage.getItem("currentUser")) {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    document.getElementById("p-email").innerText = currentUser.email;
  } else {
    window.location.href = "/login.html";
  }
} else {
  if (localStorage.getItem("currentUser")) {
    window.location.href = "/dashboard.html";
  }
}

function changePassword() {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  var oldPass = document.getElementById("old-pass").value;
  var newPass = document.getElementById("new-pass").value;
  var newConfirmPass = document.getElementById("new-confirm-pass").value;

  if (oldPass === currentUser.password) {
    if (newPass === newConfirmPass && newPass !== oldPass) {
      // editing the currentUserObj
      currentUser.password = newPass;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      //   editing the users array
      var users = JSON.parse(localStorage.getItem("users"));
      var allUsersExceptCurrent = users.filter(
        (user) => user.email != currentUser.email
      );
      var newUser = {
        email: currentUser.email,
        password: currentUser.password,
      };
      allUsersExceptCurrent.push(newUser);
      localStorage.setItem("users", JSON.stringify(allUsersExceptCurrent));
    } else if (oldPass === newPass) {
      document.getElementById("error-message").innerText =
        "Your old password should not be your new password";
    } else if (newPass != newConfirmPass) {
      document.getElementById("error-message").innerText =
        "Your new password does not match your new confirmation password";
    }
  } else {
    document.getElementById("error-message").innerText =
      "Your old password does not match";
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/login.html";
}
