// $(() => {
//   // img要素でclass属性をもち、なおかつalt属性がdamの要素に赤枠を追加する
//   $("img[class][alt='dam']").css("border", "4px solid red");
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const ele = document.querySelectorAll("img[class][alt='dam']");
//   for (let i = 0; ele.length; i++) {
//     ele[i].style.border = "4px solid red";
//   }
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("img[class][alt='dam']");
//   ele.forEach((e) => (e.style.border = "4px solid red"));
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("img[class][alt='dam']"),
//     (e) => (e.style.border = "4px solid red")
//   );
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("img[class][alt='dam']")
    )
  );
  console.log(
    document.querySelectorAll("img[class][alt='dam']").constructor.name
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/img.note"
  console.dir(document.querySelectorAll("img[class][alt='dam']"));
  const gain = document.querySelectorAll("img[class][alt='dam']");
  const result = [...gain].map((e) => (e.style.border = "4px solid red"));
};
