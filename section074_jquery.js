// $(() => {
//   $("#sale tr").eq(2).css("background-color", "orange");
//   $("#sale tr").eq(-5).css("background-color", "yellow");
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   for (let row of sale.rows) {
//     for (let cell of row.cells) {
//       cell.textContent === "2月"
//         ? (row.style.backgroundColor = "orange")
//         : cell.textContent === "8月"
//         ? (row.style.backgroundColor = "yellow")
//         : "";
//     }
//   }
// };

// filterメソッド
window.onload = () => {
  const tr = sale.lastElementChild.children;
  [...tr].filter((td) =>
    td.cells[0].textContent === "2月"
      ? (td.style.backgroundColor = "orange")
      : td.cells[0].textContent === "8月"
      ? (td.style.backgroundColor = "yellow")
      : ""
  );
};
