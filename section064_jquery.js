// $(() => {
//   $("#sale tbody tr").each(function (index) {
//     let tdText = $(this).find("td:first").text();
//     tdText = 1 + index + tdText;
//     $(this).find("td:first").text(tdText);
//   });
// });

// JavaScriptで記述する場合・・・ジェネレータ関数で実行
// window.onload = () => {
//   // オブジェクトの種類の確認 ※結果は"NodeList"
//   console.log(
//     Object.prototype.toString.call(document.querySelectorAll("#sale tbody tr"))
//   );
//   // オブジェクトの階層の確認 ※結果は"NodeList(12)/tr"
//   console.dir(document.querySelectorAll("#sale tbody tr"));
//   // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
//   console.log(Object.prototype.toString.call(document.getElementById("sale")));
//   // オブジェクトの階層の確認 ※結果は"table#sale"
//   console.dir(document.getElementById("sale"));
//   function genIterator(max = 12) {
//     let value = 1;
//     return {
//       next() {
//         return value <= max ? value++ : null;
//       },
//     };
//   }

//   let iterator = genIterator();
//   // オブジェクトの種類の確認 ※結果は"Object"
//   console.log(Object.prototype.toString.call(iterator));
//   // オブジェクトの階層の確認 ※結果は"Object"
//   console.dir(iterator);

//   // オブジェクトの種類の確認 ※結果は"HTMLCollection"
//   console.log(Object.prototype.toString.call(sale.rows));
//   // オブジェクトの階層の確認 ※結果は"HTMLCollection(13)/tr"
//   console.dir(sale.rows);
//   // オブジェクトの種類の確認 ※結果は"Undefined"
//   console.log(Object.prototype.toString.call(sale.rows.cells));
//   // オブジェクトの階層の確認 ※結果は"Undefined"
//   console.dir(sale.rows.cells);
//   for (let row of sale.rows) {
//     for (let cell of row.cells) {
//       cell.textContent === "月"
//         ? (cell.textContent = iterator.next() + "月")
//         : "";
//     }
//   }
// };

// メソッドチェーン
window.onload = () => {
  let trTags = document.getElementsByTagName("tr");
  let leftTds = [...trTags]
    .filter((_, i) => i > 0)
    .map((e) => e.firstElementChild)
    .map((e, i) => (e.textContent = `${i + 1}月`));
};
