// $(function () {
//   $("input").keydown(function (evt) {
//     var keyNumber = evt.which;
//     $("output:first").text("キー番号：" + keyNumber);
//   });
//   $("input").click(function (evt) {
//     var buttonNumber = evt.which;
//     $("output:first").text("ボタン番号：" + buttonNumber);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let ip = document.forms[0];
  let op = document.getElementsByTagName("output")[0];
  ip.onkeydown = (evt) => {
    let keyNumber = evt.code;
    op.textContent = "キーコード：" + keyNumber;
  };
  ip.onclick = (evt) => {
    let buttonNumber = evt.button;
    op.textContent = "ボタン番号：" + buttonNumber;
  };
};
