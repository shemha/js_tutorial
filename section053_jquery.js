// $(() => {
//   $(":button").click(() => {
//     $(":text").each(function () {
//       $(this).css("background", "orange");
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type=button]")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "text") {
//         ele[i].style.background = "orange";
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.background = color;
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input"), (e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.background = color;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input"),
//       result = [...gain].map((e) => {
//         const color = e.type === "text" ? "orange" : null;
//         e.style.background = color;
//       });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     Array.from(
//       [...ele].filter((e) => e.type === "text"),
//       (e) => (e.style.background = "orange")
//     );
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].filter(
//       (e) => (e.style.background = e.type === "text" && "orange")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain]
//       .filter((e) => e.type === "text")
//       .map((e) => (e.style.background = "orange"));
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
    // オブジェクトの階層の確認 ※結果は"NodeList(7)/input"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(7)/input"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].filter(
      (e) => (e.style.background = e.type === "text" && "orange")
    );
  };
};
