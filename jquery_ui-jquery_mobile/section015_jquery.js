// $(() => {
//   // tb要素が空の場合に内容を変更する
//   $("#sale tbody td:empty").text("売り上げデータなし");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td:empty");
//   for (let i = 0; ele.length; i++) {
//     if (!ele[i].textContent) {
//       ele[i].textContent = "売り上げデータなし";
//     }
//   }
// };

// ワンライナー条件式
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td:empty");
//   for (let i = 0; ele.length; i++) {
//     ele[i].textContent = ele[i].textContent || "売り上げデータなし";
//   }
// };

// for...in文とワンライナー条件式
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td:empty");
//   for (i in ele) {
//     ele[i].textContent = ele[i].textContent || "売り上げデータなし";
//   }
// };

// forEathメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#sale tbody td:empty");
//   ele.forEach((e) => {
//     if (!e.textContent) e.textContent = "売り上げデータなし";
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(document.querySelectorAll("#sale tbody td:empty"), (e) => {
//     if (!e.textContent) {
//       e.textContent = "売り上げデータなし";
//     }
//   });
// };

// filterメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody td:empty");
//   const result = [...gain].filter((e) => {
//     e.textContent === false;
//     return (e.textContent = "売り上げデータなし");
//   });
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#sale tbody td:empty")
    )
  );
  console.log(
    document.querySelectorAll("#sale tbody td:empty").constructor.name
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(4)/td"
  console.dir(document.querySelectorAll("#sale tbody td:empty"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(sale.querySelectorAll("tbody td:empty"))
  );
  console.log(sale.querySelectorAll("tbody td:empty").constructor.name);
  // オブジェクトの階層の確認 ※結果は"NodeList(4)/td"
  console.dir(sale.querySelectorAll("tbody td:empty"));
  const gain = document.querySelectorAll("#sale tbody td:empty");
  const result = [...gain].map(
    (e) => (e.textContent = e.textContent || "売り上げデータなし")
  );
};

// メソッドチェーン
// window.onload = () => {
//   const gain = document.querySelectorAll("#sale tbody td:empty");
//   const result = [...gain]
//     .filter((e) => !e.textContent)
//     .map((e) => (e.textContent = "売り上げデータなし"));
// };
