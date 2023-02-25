// $(() => {
//   $(":button").click(() => {
//     $(":reset").css("border", "2px dotted red");
//   });
// });

// JavaScriptで記述する場合・・・
// for文(type属性を使用)
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input[type='reset']");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.border = "2px dotted red";
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("[type='reset']");
//     ele.forEach((e) => {
//       e.style.border = "2px dotted red";
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("[type='reset']"), (e) => {
//       e.style.border = "2px dotted red";
//     });
//   };
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(
        document.querySelectorAll("[type='reset']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(1)/input"
    console.dir(document.querySelectorAll("[type='reset']"));
    const gain = document.querySelectorAll("[type='reset']");
    const result = [...gain].map((e) => (e.style.border = "2px dotted red"));
  };
};
