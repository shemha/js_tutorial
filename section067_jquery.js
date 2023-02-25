// $(() => {
//   // 画像にクリックイベントを割り当てる
//   $("#imageList img").click(function () {
//     // クラス名がendかどうか調べる
//     if ($(this).is(".end")) {
//       // 不透明度を変える
//       $(this).css("opacity", 0.3);
//     }
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  [...document.images].map((e) => {
    e.onclick = () => {
      e.className == "end" ? (e.style.opacity = 0.3) : "";
    };
  });
};
