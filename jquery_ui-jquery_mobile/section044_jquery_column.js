// // 3の倍数の行の背景色をオレンジ色にする
// $("#myTable tbody tr:nth-child(3n)").css("background", "orange");

// JavaScriptで記述した場合・・・
// const ele = document.querySelectorAll("#myTable tbody tr");
// for (let i = 0; i < ele.length; i++) {
//   if ((i + 1) % 3 === 0) {
//     ele[i].style.background = "orange";
//   }
// }

// forEachメソッド
// const ele = document.querySelectorAll("#myTable tbody tr");
// ele.forEach((e, i) => {
//   e.style.background = (i + 1) % 3 === 0 && "orange";
// });

// Array.fromメソッド
// Array.from(document.querySelectorAll("#myTable tbody tr"), (e, i) => {
//   e.style.background = (i + 1) % 3 === 0 && "orange";
// });

// filterメソッド
// const ele = document.querySelectorAll("#myTable tbody tr");
// [...ele].filter((e, i) => {
//   e.style.background = (i + 1) % 3 === 0 && "orange";
// });

// タグ名で取得
// const ele = document.getElementsByTagName("tr");
// [...ele].filter((e, i) => {
//   e.style.background = (i + 1) % 3 === 0 && "orange";
// });

// セレクタで指定
// オブジェクトの種類の確認 ※結果は"NodeList"
console.log(
  Object.prototype.toString.call(
    document.querySelectorAll("#myTable tbody tr:nth-child(3n)")
  )
);
// オブジェクトの階層の確認 ※結果は"NodeList(3)/tr"
console.dir(document.querySelectorAll("#myTable tbody tr:nth-child(3n)"));
const gain = document.querySelectorAll("#myTable tbody tr:nth-child(3n)");
const result = [...gain].map((e) => (e.style.background = "orange"));
