// $(() => {
//   // 親子関係にある子要素の枠を設定する
//   $("#myList>li").css("border", "1px solid red");
// });

// JavaScriptで記述した場合・・・
// for文;
// window.onload = () => {
//   const ele = document.querySelectorAll("#myList>li");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].style.border = "1px solid red";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#myList>li");
//   ele.forEach((e) => (e.style.border = "1px solid red"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#myList>li"),
//     (e) => (e.style.border = "1px solid red")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("#myList>li"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(5)/li"
  console.dir(document.querySelectorAll("#myList>li"));
  const gain = document.querySelectorAll("#myList>li");
  const result = [...gain].map((e) => (e.style.border = "1px solid red"));
};
