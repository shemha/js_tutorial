// $(() => {
//   // ボタンにクリックイベントを割り当て
//   $(":button:eq(0)").click(() => {
//     // ID名imageList内のimg要素で高さが71ピクセル画像の不透明度を変える
//     $("#imageList img").filter(function (index) {
//       if ($(this).height() === 71) {
//         $(this).css("opacity", 0.3);
//       }
//     });
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    [...document.images].filter(
      (e) => (e.style.opacity = e.clientHeight === 71 && 0.3)
    );
  };
};
