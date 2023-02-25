// $(function () {
//   // span要素があれば文字を赤色にする
//   $(".sale:has(span)").css("color", "red");
// });

// JavaScriptで記述する場合・・・
// for文;
// window.onload = () => {
//   const ele = document.querySelectorAll("span");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].style.color = "red";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("span");
//   ele.forEach((e) => (e.style.color = "red"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("span"),
//     (e) => (e.style.color = "red")
//   );
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("span");
//   const result = [...gain].map((e) => (e.style.color = "red"));
// };

// タグ名で取得
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("span"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(6)/span"
  console.dir(document.querySelectorAll("span"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(document.getElementsByTagName("span"))
  );
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(6)/span"
  console.dir(document.getElementsByTagName("span"));
  const gain = document.getElementsByTagName("span");
  const result = [...gain].map((e) => (e.style.color = "red"));
};
