// $(function () {
//   // ol要素の最初の子要素を指定する
//   $("#myList ol:first-child").css("background-color", "yellow");
//   // li要素の最初の子要素を指定する
//   $("#myList li:first-child").css("background-color", "orange");
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList ol:first-child"),
//     ele2 = document.querySelectorAll("#myList li:first-child");
//   for (let i = 0; i < ele1.length; i++) {
//     for (let j = 0; j < ele2.length; j++) {
//       ele1[i].style.backgroundColor = "yellow";
//       ele2[j].style.backgroundColor = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele1 = document.querySelectorAll("#myList ol:first-child"),
//     ele2 = document.querySelectorAll("#myList li:first-child");
//   ele1.forEach((i) => (i.style.backgroundColor = "yellow"));
//   ele2.forEach((j) => (j.style.backgroundColor = "orange"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#myList ol:first-child"),
//     (i) => (i.style.backgroundColor = "yellow")
//   );
//   Array.from(
//     document.querySelectorAll("#myList li:first-child"),
//     (j) => (j.style.backgroundColor = "orange")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList ol:first-child")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/ol"
  console.dir(document.querySelectorAll("#myList ol:first-child"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#myList li:first-child")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/li"
  console.dir(document.querySelectorAll("#myList li:first-child"));
  const gain1 = document.querySelectorAll("#myList ol:first-child"),
    gain2 = document.querySelectorAll("#myList li:first-child");
  const result1 = [...gain1].map((e) => (e.style.backgroundColor = "yellow")),
    result2 = [...gain2].map((e) => (e.style.backgroundColor = "orange"));
};
