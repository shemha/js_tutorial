// $(() => {
//   $(":button:first").click(() => {
//     $("#imageList img:eq(1)").nextAll().css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    [...document.images].filter((e, i) => (e.style.opacity = i > 1 && 0.3));
  };
};
