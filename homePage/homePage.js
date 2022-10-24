import { getData } from "../utils/service.js";

window.onload = () => {
  const message = document.getElementById("main-message");
  let userDatas = getData();
  message.innerHTML = userDatas.email;
};
