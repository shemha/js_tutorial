// $(function () {
//   $(":button").click(function () {
//     $("#msg").insertBefore("#pi");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    let newPi = pi.cloneNode(true);
    pi.remove();
    msg.insertAdjacentHTML("afterend", newPi.outerHTML);
  };
};
