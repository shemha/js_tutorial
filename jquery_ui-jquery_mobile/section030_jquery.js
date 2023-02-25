// $(function () {
//   // 1番目の子要素の背景色を黄色にする
//   $("#myList li:nth-child(1)").css("background-color", "yellow");
//   // 2番目の子要素の背景色をオレンジ色にする
//   $("#myList li:nth-child(2)").css("background-color", "orange");
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList li:nth-child(1)"),
//     ele2 = document.querySelectorAll("#myList li:nth-child(2)");
//   for (let i = 0; i < ele1.length; i++) {
//     for (let j = 0; j < ele2.length; j++) {
//       ele1[i].style.backgroundColor = "yellow";
//       ele2[j].style.backgroundColor = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList li:nth-child(1)"),
//     ele2 = document.querySelectorAll("#myList li:nth-child(2)");
//   ele1.forEach((i) => (i.style.backgroundColor = "yellow"));
//   ele2.forEach((j) => (j.style.backgroundColor = "orange"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#myList li:nth-child(1)"),
//     (i) => (i.style.backgroundColor = "yellow")
//   );
//   Array.from(
//     document.querySelectorAll("#myList li:nth-child(2)"),
//     (j) => (j.style.backgroundColor = "orange")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList li:nth-child(1)")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/li"
  console.dir(document.querySelectorAll("#myList li:nth-child(1)"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList li:nth-child(2)")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/li"
  console.dir(document.querySelectorAll("#myList li:nth-child(2)"));
  const gain1 = document.querySelectorAll("#myList li:nth-child(1)"),
    gain2 = document.querySelectorAll("#myList li:nth-child(2)");
  const result1 = [...gain1].map((e) => (e.style.backgroundColor = "yellow")),
    result2 = [...gain2].map((e) => (e.style.backgroundColor = "orange"));
};
