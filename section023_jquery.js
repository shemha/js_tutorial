// $(() => {
//   // 8番目のtr要素の背景色をオレンジ色にする
//   $("#sale tbody tr:eq(7)").css("background-color", "orange");
// });

// JavaScriptで記述した場合・・・
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   ele[7].style.background = "orange";
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   ele.forEach((e, i) => {
//     const color = i === 7 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody tr"), (e, i) => {
//     const color = i === 7 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = [...gain].map((e, i) => {
//     const color = i === 7 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// findメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = ([...gain].find((_, i) => i === 7).style.background =
//     "orange");
// };

// id属性を指定して子要素を取得する方法
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("#sale tbody tr"))
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(12)/tr"
  console.dir(document.querySelectorAll("#sale tbody tr"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.lastElementChild.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(12)/tr"
  console.dir(sale.lastElementChild.children);
  const gain = sale.lastElementChild.children;
  const result = ([...gain].find((_, i) => i === 7).style.background =
    "orange");
};
