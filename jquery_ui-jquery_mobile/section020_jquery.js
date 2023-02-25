// $(() => {
//   // h1要素の次にあるol要素の枠を赤色にする
//   $("h1+ol").css("border", "1px solid red");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("h1+ol");
//   for (var i = 0; ele.length; i++) {
//     ele[i].style.border = "1px solid red";
//   }
// };

// for...in文
// window.onload = () => {
//   const ele = document.querySelectorAll("h1+ol");
//   for (var i in ele) {
//     ele[i].style.border = "1px solid red";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("h1+ol");
//   ele.forEach((e) => (e.style.border = "1px solid red"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("h1+ol"),
//     (e) => (e.style.border = "1px solid red")
//   );
// };

// mapメソッド
// window.onload = () => {

//   const gain = document.querySelectorAll("h1+ol");
//   const result = [...gain].map((e) => (e.style.border = "1px solid red"));
// };

// 指定要素の次の兄弟ノードを取得
// window.onload = () => {
//   document.querySelector("h1").nextSibling.nextSibling.style.border =
//     "1px solid red";
// };

// 指定要素の次の兄弟要素を取得
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("h1+ol"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/ol"
  console.dir(document.querySelectorAll("h1+ol"));
  // オブジェクトの種類の確認 ※結果は"HTMLOListElement"
  console.log(
    Object.prototype.toString.call(
      document.querySelector("h1").nextSibling.nextSibling
    )
  );
  // オブジェクトの階層の確認 ※結果は"ol"
  console.dir(document.querySelector("h1").nextSibling.nextSibling);
  // オブジェクトの種類の確認 ※結果は"HTMLOListElement"
  console.log(
    Object.prototype.toString.call(
      document.querySelector("h1").nextElementSibling
    )
  );
  // オブジェクトの階層の確認 ※結果は"ol"
  console.dir(document.querySelector("h1").nextElementSibling);
  document.querySelector("h1").nextElementSibling.style.border =
    "1px solid red";
};
