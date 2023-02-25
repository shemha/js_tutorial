// $(() => {
//   $(":button").click(() => {
//     $(":input").css("border", "2px dotted red");
//   });
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.border = "2px dotted red";
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => (e.style.border = "2px dotted red"));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll("input"),
//       (e) => (e.style.border = "2px dotted red")
//     );
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].map((e) => (e.style.border = "2px dotted red"));
//   };
// };

// タグ名を指定
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll("input"))
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(6)/input"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(6)/input"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].map((e) => (e.style.border = "2px dotted red"));
  };
};
