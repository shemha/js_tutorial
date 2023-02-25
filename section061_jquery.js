// $(() => {
//   $(":button").click(() => {
//     $("#myPhoto").removeAttr("onclick");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/input"
  console.dir(document.querySelectorAll("input[type=button]"));
  // オブジェクトの種類の確認 ※結果は"Function"
  console.log(Object.prototype.toString.call(myPhoto.removeAttribute));
  // オブジェクトの階層の確認 ※結果は"removeAttribute()"
  console.dir(myPhoto.removeAttribute);
  const btnType = document.querySelectorAll("input[type=button]")[0];
  btnType.onclick = () => {
    myPhoto.removeAttribute("onclick");
  };
};
