// $(() => {
//   $(":button").click(() => {
//     $(":radio").css("margin", "10px");
//   });
// });

// JavaScriptで記述する場合・・・
// for文(type属性を使用)
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input[type='radio']");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.margin = "10px";
//     }
//   };
// };

// for文(id属性を使用)
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("[type='radio']");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.margin = "10px";
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("[type='radio']");
//     ele.forEach((e) => (e.style.margin = "10px"));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll("[type='radio']"),
//       (e) => (e.style.margin = "10px")
//     );
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
        document.querySelectorAll("[type='radio']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(3)/input"
    console.dir(document.querySelectorAll("[type='radio']"));
    const gain = document.querySelectorAll("[type='radio']");
    const result = [...gain].map((e) => (e.style.margin = "10px"));
  };
};
