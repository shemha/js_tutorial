// $(() => {
//   // 子要素の背景色を黄色にする
//   $("div *:only-child").css("background-color", "yellow");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("div *:only-child");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].style.backgroundColor = "yellow";
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("div *:only-child");
//   ele.forEach((e) => (e.style.backgroundColor = "yellow"));
// };

// Array.formメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("div *:only-child"),
//     (e) => (e.style.backgroundColor = "yellow")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("div *:only-child")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/span"
  console.dir(document.querySelectorAll("div *:only-child"));
  const gain = document.querySelectorAll("div *:only-child");
  const result = [...gain].map((e) => (e.style.backgroundColor = "yellow"));
};
