// $(() => {
//   // 6番目から前のtr要素の背景色をオレンジ色にする
//   $("#sale tbody tr:lt(6)").css("background-color", "orange");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   for (let i = 0; i < ele.length; i++) {
//     if (i < 6) {
//       ele[i].style.background = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   ele.forEach((e, i) => {
//     const color = i < 6 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody tr"), (e, i) => {
//     const color = i < 6 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// mapメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   [...ele].map((e, i) => {
//     const color = i < 6 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// filterメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("#sale tbody tr"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(12)/tr"
  console.dir(document.querySelectorAll("#sale tbody tr"));
  const ele = document.querySelectorAll("#sale tbody tr");
  [...ele].filter((e, i) => {
    e.style.background = i < 6 && "orange";
  });
};

// Array.fromとfilterメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   Array.from(
//     [...ele].filter((_, i) => i < 6),
//     (e) => (e.style.background = "orange")
//   );
// };

// メソッドチェーン
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = [...gain]
//     .filter((_, i) => i < 6)
//     .map((e) => (e.style.background = "orange"));
// };
