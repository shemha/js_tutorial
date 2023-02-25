// $(function () {
//   $(":button").click(function () {
//     $("#temp tbody tr td:odd").empty();
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let td = document.querySelectorAll("td:nth-child(even)");
  btn.onclick = () => {
    [...td].map((e) => (e.textContent = ""));
  };
};
