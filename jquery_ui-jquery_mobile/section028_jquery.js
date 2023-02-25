// $(() => {
//   // div#myListを祖先に持つol要素を選択する
//   $("div#myList ol").css("border", "1px solid red");
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("div#myList ol");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].style.border = "1px solid red";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("div#myList ol");
//   ele.forEach((e) => (e.style.border = "1px solid red"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("div#myList ol"),
//     (e) => (e.style.border = "1px solid red")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("div#myList ol"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(4)/ol"
  console.dir(document.querySelectorAll("div#myList ol"));
  const gain = document.querySelectorAll("div#myList ol");
  const result = [...gain].map((e) => (e.style.border = "1px solid red"));
};
