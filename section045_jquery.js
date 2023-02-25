// $(() => {
//   $("#sale tbody td:contains('-')").css("color", "red");
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td");
//   for (let i = 0; i < ele.length; i++) {
//     if (ele[i].textContent.indexOf("-") > -1) {
//       ele[i].style.color = "red";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td");
//   ele.forEach((e) => {
//     const color = e.textContent.indexOf("-") > -1 ? "red" : null;
//     e.style.color = color;
//   });
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody td"), (e) => {
//     const color = e.textContent.includes("-") ? "red" : null;
//     e.style.color = color;
//   });
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody td"),
//     result = [...gain].map((e) => {
//       const color = e.textContent.includes("-") ? "red" : null;
//       e.style.color = color;
//     });
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td");
//   Array.from(
//     [...ele].filter((e) => e.textContent.includes("-")),
//     (e) => (e.style.color = "red")
//   );
// };

// filterメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.lastElementChild.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(12)/tr"
  console.dir(sale.lastElementChild.children);
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("#sale tbody td"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(24)/td"
  console.dir(document.querySelectorAll("#sale tbody td"));
  const gain = document.querySelectorAll("#sale tbody td");
  const result = [...gain].filter(
    (e) => (e.style.color = e.textContent.includes("-") && "red")
  );
};

// メソッドチェーン
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody td");
//   const result = [...gain]
//     .filter((e) => e.textContent.includes("-"))
//     .map((e) => (e.style.color = "red"));
// };

// id属性から末尾の子要素を取得
// window.onload = () => {
//   const gain = sale.lastElementChild.children;
//   const result = [...gain].map((e) => {
//     return [...e.children].map(
//       (e) => (e.style.color = e.textContent.includes("-") && "red")
//     );
//   });
// };
