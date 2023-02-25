// $(function () {
//   $(":button").click(function () {
//     $("#pi").before("円周率は");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    pi.insertAdjacentHTML("beforebegin", "円周率は");
  };
};
