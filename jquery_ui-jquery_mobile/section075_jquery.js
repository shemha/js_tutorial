// $(() => {
//   $("td, th").click(function () {
//     $(this).parent().css("background-color", "yellow");
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   for (let row of sale.rows) {
//     for (let cell of row.cells) {
//       cell.onclick = () => (row.style.backgroundColor = "yellow");
//     }
//   }
// };

// mapメソッド
window.onload = () => {
  const tr = sale.lastElementChild.children;
  [...tr].map(
    (rows) =>
      (rows.onclick = (td) => {
        td.target.parentElement.style.backgroundColor = "yellow";
      })
  );
};
