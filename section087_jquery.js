// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img").slice(2, 5).css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let imgs = imageList.children;

  btn.onclick = () => {
    [...imgs].slice(2, 5).map((e) => (e.style.opacity = "0.3"));
  };
};
