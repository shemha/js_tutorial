// $(function () {
//   // 偶数番目の背景色をオレンジ色にする
//   $("#sale tbody tr:even").css("background-color", "orange");
//   // 奇数番目の背景色を黄色にする
//   $("#sale tbody tr:odd").css("background-color", "yellow");
// });

// JavaScriptで記述した場合・・・
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   for (let i = 0; i < ele.length; i++) {
//     if (i % 2 === 0) {
//       ele[i].style.background = "yellow";
//     } else {
//       ele[i].style.background = "orange";
//     }
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody tr");
//   ele.forEach((e, i) => {
//     if (i % 2 === 0) {
//       e.style.background = "yellow";
//     } else {
//       e.style.background = "orange";
//     }
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody tr"), (e, i) => {
//     const color = i % 2 === 0 ? "yellow" : "orange";
//     e.style.background = color;
//   });
// };

// filterメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = [...gain].filter((e, i) => {
//     e.style.background = i % 2 === 0 ? "yellow" : "orange";
//   });
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr");
//   const result = [...gain].map((e, i) => {
//     const color = i % 2 === 0 ? "yellow" : "orange";
//     e.style.background = color;
//   });
// };

// メソッドチェーン
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody tr"),
//     result1 = [...gain]
//       .filter((_, i) => i % 2 === 0)
//       .map((e) => (e.style.background = "yellow")),
//     result2 = [...gain]
//       .filter((_, i) => i % 2 === 1)
//       .map((e) => (e.style.background = "orange"));
// };

// id属性を指定して子要素を取得する方法(mapメソッド)
// window.onload = () => {
//   const result = [...gain].map((e, i) => {
//     e.style.background = i % 2 === 0 ? "yellow" : "orange";
//   });
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
    e.style.background = i % 2 === 0 ? "yellow" : "orange";
  });
};
