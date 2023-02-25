// $(() => {
//   $("#sale").find("tr.minus").css("color", "red");
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   for (let row of sale.rows) {
//     for (let cell of row.cells) {
//       cell.textContent.includes("-") ? (row.style.color = "red") : "";
//     }
//   }
// };

// filterメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.rows));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(13)/tr"
  console.dir(sale.rows);
  // オブジェクトの種類の確認 ※結果は"Undefined"
  console.log(Object.prototype.toString.call(sale.rows.cells));
  // オブジェクトの階層の確認 ※結果は"Undefined"
  console.dir(sale.rows.cells);
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.lastElementChild.children));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(12)/tr"
  console.dir(sale.lastElementChild.children);
  const table = sale.lastElementChild.children;
  [...table].filter((tr) => {
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(Object.prototype.toString.call(tr));
    // オブジェクトの階層の確認 ※結果は"tr"
    console.dir(tr);
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(Object.prototype.toString.call(tr.cells));
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(2)/td"
    console.dir(tr.cells);
    tr.cells[1].textContent.includes("-") ? (tr.style.color = "red") : "";
  });
};
