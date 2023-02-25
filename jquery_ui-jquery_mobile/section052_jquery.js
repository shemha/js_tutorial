// $(() => {
//   $(":button").click(() => {
//     $(":submit").css("border", "2px dotted red");
//   });
// });

// JavaScriptで記述する場合・・・
// for文(type属性を使用)
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']");
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "submit") {
//         ele[i].style.border = "2px dotted red";
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => {
//       const attire = e.type === "submit" ? "2px dotted red" : null;
//       e.style.border = attire;
//     });
//   };
// };

// Array.formメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input"), (e) => {
//       const attire = e.type === "submit" ? "2px dotted red" : null;
//       e.style.border = attire;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input"),
//       result = [...gain].map((e) => {
//         const attire = e.type === "submit" ? "2px dotted red" : null;
//         e.style.border = attire;
//       });
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].filter(
//       (e) => (e.style.border = e.type === "submit" && "2px dotted red")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain]
//       .filter((e) => e.type === "submit")
//       .map((e) => (e.style.border = "2px dotted red"));
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
    // オブジェクトの階層の確認 ※結果は"NodeList(4)/input/input/input/input#btn"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(4)/input/input/input/input#btn"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].filter(
      (e) => (e.style.border = e.type === "submit" && "2px dotted red")
    );
  };
};
