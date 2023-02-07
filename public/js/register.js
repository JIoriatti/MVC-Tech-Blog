
const validate = (password, passwordConfirm) => {
  err = "";
  if (password.length < 8 || passwordConfirm.length < 8) {
    err += "Password must be 8 or more characters long.\n";
  }
  if (err.length > 0) {
    alert(err);
    return false;
  }
  return true;
};

const registrationHandler = async (e) => {
  // e.preventDefault();
  console.log("clicked")
  try {
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector("#passwordInput").value.trim();
    const passwordConfirm = document
      .querySelector("#passwordConfirmInput")
      .value.trim();

    if (!validate(password, passwordConfirm)) {
      return;
    }
    console.log(JSON.stringify({username,password}))
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.assign('/login')
    }
  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#register-button").addEventListener("submit", registrationHandler);
