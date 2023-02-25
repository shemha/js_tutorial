// $(() => {
//   $(":button:first").click(() => $("#coin").prop("tax", 0.1));
//   $(":button:eq(1)").click(() => alert($("#coin").prop("tax")));
//   $(":button:eq(2)").click(() => $("#coin").removeProp("tax"));
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/input"
  console.dir(document.querySelectorAll("input[type=button]"));
  // オブジェクトの種類の確認 ※結果は"Function"
  console.log(Object.prototype.toString.call(coin.setAttribute));
  // オブジェクトの階層の確認 ※結果は"setAttribute()"
  console.dir(coin.setAttribute);
  // オブジェクトの種類の確認 ※結果は"Function"
  console.log(Object.prototype.toString.call(coin.hasAttribute));
  // オブジェクトの階層の確認 ※結果は"hasAttribute()"
  console.dir(coin.hasAttribute);
  // オブジェクトの種類の確認 ※結果は"Function"
  console.log(Object.prototype.toString.call(coin.getAttribute));
  // オブジェクトの階層の確認 ※結果は"getAttribute()"
  console.dir(coin.getAttribute);
  // オブジェクトの種類の確認 ※結果は"Function"
  console.log(Object.prototype.toString.call(coin.removeAttribute));
  // オブジェクトの階層の確認 ※結果は"removeAttribute()"
  console.dir(coin.removeAttribute);
  const btnType = document.querySelectorAll("input[type=button]");
  btnType[0].onclick = () => {
    coin.setAttribute("tax", "0.1");
  };
  btnType[1].onclick = () => {
    const tax = coin.hasAttribute("tax")
      ? coin.getAttribute("tax")
      : "設定されていいません";
    alert(tax);
  };
  btnType[2].onclick = () => {
    coin.removeAttribute("tax");
  };
};
