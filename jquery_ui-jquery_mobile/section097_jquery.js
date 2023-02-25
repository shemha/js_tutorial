// $(function () {
//   $(":button").click(function () {
//     $("#pi").appendTo("#msg");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    let newPi = pi.cloneNode(true);
    pi.remove();

    msg.insertAdjacentHTML("beforeend", newPi.outerHTML);
  };
};
