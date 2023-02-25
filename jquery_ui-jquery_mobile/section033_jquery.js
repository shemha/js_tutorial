// $(function () {
//   // #myListの兄弟要素のol要素の枠を赤色にする
//   $("#myList~ol").css("border", "1px solid red");
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("#myList~ol");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].style.border = "1px solid red";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#myList~ol");
//   ele.forEach((e) => (e.style.border = "1px solid red"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#myList~ol"),
//     (e) => (e.style.border = "1px solid red")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("#myList~ol"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/ol"
  console.dir(document.querySelectorAll("#myList~ol"));
  const gain = document.querySelectorAll("#myList~ol");
  const result = [...gain].map((e) => (e.style.border = "1px solid red"));
};
