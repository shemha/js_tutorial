// $(() => {
//   // ドキュメントにクリックイベントを割り当てる
//   $(document).bind("click", (evt) => {
//     // 結果表示する要素をクリアする
//     $("output:first").text("");
//     // クリック時の親要素を全て出力する
//     $(evt.target)
//       .parents()
//       .each(function (index) {
//         // 内容を読み出す
//         let htmlText = $("output:first").html();
//         // タグ名（要素名）を取得する
//         htmlText += this.tagName + "<br>";
//         // 結果を表示する
//         $("output:first").html(htmlText);
//       });
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  document.onclick = (evt) => {
    op.innerHTML = "";
    let i = evt.target;
    while (i.tagName !== "HTML") {
      const prnt = i.closest(i.parentElement.tagName.toLowerCase());
      op.innerHTML += prnt.tagName + "<br>";
      i = i.parentElement;
    }
  };
};
