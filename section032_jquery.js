// $(function () {
//   // #myList内の最後のol要素の背景色を黄色にする
//   $("#myList ol:last-child").css("background-color", "yellow");
//   // #myList内の最後のli要素の背景色をオレンジ色にする
//   $("#myList li:last-child").css("background-color", "orange");
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList ol:last-child"),
//     ele2 = document.querySelectorAll("#myList li:last-child");
//   for (let i = 0; i < ele1.length; i++) {
//     for (var j = 0; j < ele2.length; j++) {
//       ele1[i].style.backgroundColor = "yellow";
//       ele2[j].style.backgroundColor = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList ol:last-child"),
//     ele2 = document.querySelectorAll("#myList li:last-child");
//   ele1.forEach((i) => (i.style.backgroundColor = "yellow"));
//   ele2.forEach((j) => (j.style.backgroundColor = "orange"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#myList ol:last-child"),
//     (i) => (i.style.backgroundColor = "yellow")
//   );
//   Array.from(
//     document.querySelectorAll("#myList li:last-child"),
//     (j) => (j.style.backgroundColor = "orange")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList ol:last-child")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/ol"
  console.dir(document.querySelectorAll("#myList ol:last-child"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList li:last-child")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/li"
  console.dir(document.querySelectorAll("#myList li:last-child"));
  const gain1 = document.querySelectorAll("#myList ol:last-child"),
    gain2 = document.querySelectorAll("#myList li:last-child");
  const result1 = [...gain1].map((e) => (e.style.backgroundColor = "yellow")),
    result2 = [...gain2].map((e) => (e.style.backgroundColor = "orange"));
};
