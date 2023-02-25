// $(window).resize(function (event) {
//   $("output:first").text("resizeイベント発生：" + Date.now());
// });

// JavaScriptで記述する場合・・・
window.addEventListener("resize", () => {
  let op = document.getElementsByTagName("output")[0];
  op.textContent = "resizeイベント発生：" + Date.now();
});
