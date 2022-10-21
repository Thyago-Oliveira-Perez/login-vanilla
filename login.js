import fakeFetchApi from "./utils/fakeFetchApi.js";

window.onload = () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  const userInfos = {
    email: "",
    password: "",
  };

  function onChangeInput(value) {
    userInfos[value.target.name] = value.target.value;
    if(userInfos[value.target.name].length < 1){
      passwordInput.style.borderColor = "white"
      emailInput.style.borderColor = "white"
    }
  }

  function onChangeLogin(event) {
    event.preventDefault();
    assert(emailValidation(userInfos.email), "Email inválido", false);
    assert(passwordValidation(userInfos.password), "Senha inválida", false);
    fakeFetchApi(userInfos);
  }

  function emailValidation(email) {
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@") + 1, email.length);

    if (
      usuario.length >= 1 &&
      (dominio >= "gmail" || dominio >= "hotmail" || dominio >= "outlook") &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    ) {
      return true;
    } else {
      emailInput.style.borderColor = "red";
      return false;
    }
  }

  function passwordValidation(password) {
    if (
      password.length >= 8 &&
      /[A-Z]/gm.test(password) &&
      /[a-z]/gm.test(password) &&
      /[!@#$%*()_+^&{}}:;?.]/gm.test(password)
    ) {
      return true;
    } else {
      passwordInput.style.borderColor = "red";
      return false;
    }
  }

  /**
   * Function to help validations
   * @param {what is going to be verified} condition 
   * @param {if the condition is false, pop up a message on the screen} message 
   * @param {defines what is going to be usage of the fucntion} message 
   */
  function assert(condition, message, defaultUssage) {
    if(defaultUssage){
      if (!condition) throw new Error(message);
    }else{
      if (!condition) alert(message);
    }
  }

  emailInput.addEventListener("keyup", onChangeInput);
  passwordInput.addEventListener("keyup", onChangeInput);
  loginButton.addEventListener("click", onChangeLogin);
};
