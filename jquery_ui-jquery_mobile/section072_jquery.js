// $(() => {
//   $(":button:first").click(() => {
//     $("#imageList div").has("img").css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    [...document.images].map((e) => (e.style.opacity = 0.3));
  };
};
