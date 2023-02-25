// $(() => {
//   // 6番目よりも後のtr要素の背景色をオレンジ色にする
//   $("#sale tbody tr:gt(5)").css("background", "orange");
// });

// JavaScriptで記述した場合・・・
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   for (let i = 0; i < ele.length; i++) {
//     if (i > 5) {
//       ele[i].style.background = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   ele.forEach((e, i) => {
//     const color = i > 5 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody tr"), (e, i) => {
//     const color = i > 5 ? "orange" : null;
//     e.style.background = color;
//   });
// };

// filterメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   [...ele].filter((e, i) => {
//     e.style.background = i > 5 && "orange";
//   });
// };

// mapメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   [...ele].map((e, i) => {
//     const color = i > 5 ? "orange" : "";
//     e.style.background = color;
//   });
// };

// Arrayfromとfilterメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   Array.from(
//     [...ele].filter((_, i) => i > 5),
//     (e) => (e.style.background = "orange")
//   );
// };

// メソッドチェーン
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = [...gain]
//     .filter((_, i) => i > 5)
//     .map((e) => (e.style.background = "orange"));
// };

// id属性を指定して子要素を取得する方法(filterメソッド)
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
  const result = [...gain].filter((e, i) => {
    e.style.background = i > 5 && "orange";
  });
};

// id属性を指定して子要素を取得する方法(メソッドチェーン)
// window.onload = () => {
//   const gain = sale.lastElementChild.children;
//   const result = [...gain]
//     .filter((_, i) => i > 5)
//     .map((e) => (e.style.background = "orange"));
// };
