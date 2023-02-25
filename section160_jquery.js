// $(function () {
//   $("form").submit(function (event) {
//     alert("送信します");
//   });
// });

// JavaScriptで記述する場合・・・
window.addEventListener("DOMContentLoaded", () => {
  let sm = document.forms[0];

  sm.onsubmit = () => {
    alert("送信します");
  };
});
