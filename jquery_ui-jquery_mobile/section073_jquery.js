// $(() => {
//   $(":button:eq(0)").click(() => {
//     $("#imageList img").not(".ok").css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    [...document.images].filter(
      (e) => (e.style.opacity = e.className === "ok" && 0.3)
    );
  };
};
