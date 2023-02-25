// $(function () {
//   $("div").click(function (evt) {
//     var flag = evt.isPropagationStopped();
//     alert("isDefaultPrevented()実行前：" + flag);
//     evt.stopPropagation();
//     var flag = evt.isPropagationStopped();
//     alert("isDefaultPrevented()実行後：" + flag);
//   });
// });

// JavaScriptで記述する場合・・・うまくいかない
window.onload = () => {
  const divTag = document.getElementsByTagName("div");
  [...divTag].map((e) => {
    e.onclick = (evt) => {
      // let flag = evt.cancelable;
      console.dir(evt.target);
      // alert("stopPropagation()実行前：" + flag);
      evt.stopPropagation();
      // flag = evt;
      console.dir(evt.target);
      // alert("stopPropagation()実行後：" + flag);
    };
  });
};
