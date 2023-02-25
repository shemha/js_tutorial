// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img").unwrap();
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let mark = document.getElementsByClassName("mark");

  btn.onclick = () => {
    [...mark].map((e) => {
      e.parentNode.insertBefore(e.children[0], e);
      e.remove();
    });
  };
};
