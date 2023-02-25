// $(document).ready(function () {
//   $("output:first").html("ページ読み込み完了");
// });

// JavaScriptで記述する場合・・・
window.addEventListener("DOMContentLoaded", () => {
  let op = document.getElementsByTagName("output")[0];
  op.textContent = "ページ読み込み完了";
});
