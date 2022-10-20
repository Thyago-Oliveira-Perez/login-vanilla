window.onload = () => {
  
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");  
  
  const UserInfos = {
    username: "",
    password: "",
  };

  function onChangeInput(value) {
    UserInfos[value.target.name] = value.target.value;
  }

  function onChangeLogin(event){
    event.preventDefault();
    console.log(UserInfos)
  }

  usernameInput.addEventListener("keyup", onChangeInput);
  passwordInput.addEventListener("keyup", onChangeInput);
  loginButton.addEventListener("click", onChangeLogin);

};
