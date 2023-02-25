// $(function () {
//   $("input").focus(function (event) {
//     $("output:first").text(event.currentTarget.value);
//   });
// });

// JavaScriptで記述する場合・・・
window.addEventListener("DOMContentLoaded", () => {
  let ips = document.forms[0];
  let op = document.getElementsByTagName("output")[0];

  [...ips].map((e) => {
    e.onfocus = (evt) => {
      op.textContent = evt.currentTarget.value;
    };
  });
});
