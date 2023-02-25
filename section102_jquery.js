// $(function () {
//   $(":button").click(function () {
//     $("#pi").after(Math.PI);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    pi.insertAdjacentHTML("afterend", Math.PI);
  };
};
