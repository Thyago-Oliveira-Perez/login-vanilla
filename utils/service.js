export function setData(datas) {
  let userDatasConverted = JSON.stringify(datas);
  localStorage.setItem("userInfos", userDatasConverted);
}

export function getData() {
  let userDatas = localStorage.getItem("userInfos");
  return JSON.parse(userDatas);
}
