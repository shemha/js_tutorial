$(function () {
  $("div").click(function (evt) {
    var flag = evt.isImmediatePropagationStopped();
    alert("isImmediatePropagationStopped()実行前：" + flag);
    evt.stopImmediatePropagation();
    var flag = evt.isImmediatePropagationStopped();
    alert("isImmediatePropagationStopped()実行後：" + flag);
  });
});

// JavaScriptで記述する場合・・・うまくいかない
// window.onload = () => {
//   Lv1.onclick = (evt) => {
//     let flag = evt.bubbles;
//     alert("stopImmediatePropagation()実行前：" + flag);
//     evt.stopImmediatePropagation();
//     flag = evt.bubbles;
//     alert("stopImmediatePropagation()実行後：" + flag);
//   };
// };
