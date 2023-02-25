// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img:eq(2)").prevUntil(".ok").css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let imgs = imageList.children;

  btn.onclick = () => {
    [...imgs]
      .filter((e, i) => i + 1 < 3 && e.className !== "ok")
      .map((e) => (e.style.opacity = "0.3"));
  };
};
