// $(() => {
//   // th要素を選択する
//   $("th").css("background-color", "orange");
//   // td要素を選択する
//   $("td").css("background-color", "yellow");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const thEle = document.getElementsByTagName("th"),
//     tdEle = document.getElementsByTagName("td");
//   for (let i = 0; i < thEle.length; i++) {
//     for (let j = 0; j < tdEle.length; j++) {
//       thEle[i].style.background = "orange";
//       tdEle[j].style.background = "yellow";
//     }
//   }
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   const ele = [
//     document.querySelectorAll("th"),
//     document.querySelectorAll("td"),
//   ];
//   ele[0].forEach((i) => (i.style.background = "orange"));
//   ele[1].forEach((j) => (j.style.background = "yellow"));
// };

// forEachメソッド(getElementsByTagNameで取得)
// window.onload = () => {
//   const thEle = document.getElementsByTagName("th"),
//     tdEle = document.getElementsByTagName("td");
//   [...thEle].forEach((i) => (i.style.background = "orange"));
//   [...tdEle].forEach((j) => (j.style.background = "yellow"));
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from(
//     document.getElementsByTagName("th"),
//     (i) => (i.style.background = "orange")
//   );
//   Array.from(
//     document.getElementsByTagName("td"),
//     (j) => (j.style.background = "yellow")
//   );
// };

// mapメソッド
// window.onload = () => {
//   const gainTh = document.getElementsByTagName("th"),
//     gainTd = document.getElementsByTagName("td");
//   const resultTh = [...gainTh].map((i) => (i.style.background = "orange")),
//     resultTd = [...gainTd].map((j) => (j.style.background = "yellow"));
// };

// id属性を取得して親子関係で指定した場合
// window.onload = () => {
//   const gainTh = sale.firstElementChild.children,
//     gainTd = sale.lastElementChild.children;
//   const resultTh = [...gainTh].map((i) => (i.style.background = "orange")),
//     resultTd = [...gainTd].map((j) => (j.style.background = "yellow"));
// };

// 子要素を取得し、その配列を利用
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(Object.prototype.toString.call(document.querySelectorAll("th")));
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/th"
  console.dir(document.querySelectorAll("th"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(Object.prototype.toString.call(document.querySelectorAll("td")));
  // オブジェクトの階層の確認 ※結果は"NodeList(24)/td"
  console.dir(document.querySelectorAll("td"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(document.getElementsByTagName("th"))
  );
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(2)/th"
  console.dir(document.getElementsByTagName("th"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(document.getElementsByTagName("td"))
  );
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(24)/td"
  console.dir(document.getElementsByTagName("td"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.firstElementChild.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/tr"
  console.dir(sale.firstElementChild.children);
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.lastElementChild.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(12)/tr"
  console.dir(sale.lastElementChild.children);
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(2)/thead/tbody"
  console.dir(sale.children);
  sale.children[0].style.background = "orange";
  sale.children[1].style.background = "yellow";
};
