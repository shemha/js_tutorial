// $(() => {
//   // #cr, .class, spanの色を赤色にする
//   $("#cr, .address, span").css("color", "red");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("#cr, .address, span");
//   for (let i = 0; ele.length; i++) {
//     ele[i].style.color = "red";
//   }
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("#cr, .address, span");
//   ele.forEach((e) => (e.style.color = "red"));
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("#cr, .address, span"),
//     (e) => (e.style.color = "red")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("#cr, .address, span")
    )
  );
  console.log(
    document.querySelectorAll("#cr, .address, span").constructor.name
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(4)/div#cr/div.address/span/span"
  console.dir(document.querySelectorAll("#cr, .address, span"));
  const gain = document.querySelectorAll("#cr, .address, span");
  const result = [...gain].map((e) => (e.style.color = "red"));
};
