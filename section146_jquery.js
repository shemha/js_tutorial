$(function () {
  // 画像にerrorイベントを割り当てる
  $("#gallery img").error(function (evt) {
    // 読み込めなかった画像のsrcプロパティを読み出す
    var url = $(this).attr("src");
    // エラーメッセージと読み込めなかった画像のURLを表示
    $("output").html($("output").html() + "エラー：" + url + "<br>");
  });
});

// JavaScriptで記述する場合・・・うまくいかない
// window.onload = (evt) => {
//   let op = document.getElementsByTagName("output")[0];
//   let imgs = document.querySelectorAll("img");
// };
