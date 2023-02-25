// $(function () {
//   $("a").click(function (evt) {
//     var flag = evt.isDefaultPrevented();
//     alert("preventDefault()実行前：" + flag);
//     evt.preventDefault();
//     flag = evt.isDefaultPrevented();
//     alert("preventDefault()実行後：" + flag);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let aTags = document.getElementsByTagName("a");

  [...aTags].map((e) => {
    e.onclick = (evt) => {
      let flag = evt.defaultPrevented;
      alert("preventDefault()実行前：" + flag);
      evt.preventDefault();
      flag = evt.defaultPrevented;
      alert("preventDefault()実行後：" + flag);
    };
  });
};
