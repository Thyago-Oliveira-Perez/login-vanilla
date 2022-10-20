import fakeFetchApi from "./utils/fakeFetchApi.js";

window.onload = () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  const userInfos = {
    username: "",
    password: "",
  };

  function onChangeInput(value) {
    userInfos[value.target.name] = value.target.value;
  }

  function onChangeLogin(event) {
    event.preventDefault();
    fakeFetchApi(userInfos);
    console.log(userInfos);
  }

  usernameInput.addEventListener("keyup", onChangeInput);
  passwordInput.addEventListener("keyup", onChangeInput);
  loginButton.addEventListener("click", onChangeLogin);
};
