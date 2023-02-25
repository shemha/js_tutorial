// $(function () {
//   var htmlText1 = $("output:first").html();
//   $("output:first").html(htmlText1 + "ページ読み込み完了" + "<br>");
//   $("img").bind("load", function () {
//     var altText = this.alt;
//     var htmlText2 = "output:first".html();
//     $("output:first").html(htmlText2 + "読み込み完了：" + altText + "<br>");
//   });
// });

// JavaScriptで記述する場合・・・
window.addEventListener("DOMContentLoaded", () => {
  let op = document.getElementsByTagName("output")[0];
  op.innerHTML = op.innerHTML + "ページ読み込み完了" + "<br>";

  [...document.images].map((e) => {
    e.onload = (evt) => {
      let altText = evt.target.alt;
      op.innerHTML = op.innerHTML + "読み込み完了" + altText + "<br>";
    };
  });
});
