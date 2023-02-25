// $(function () {
//   $(":button").click(function () {
//     $("#pi").append(Math.PI, "<span>です。</span>");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    pi.insertAdjacentHTML("beforeend", Math.PI + "<span>です。</span>");
  };
};
