// $(() => {
//   $(":button").click(function () {
//     $(":disabled").each(function () {
//       // テキストフィールドだけを対象にする
//       const color = $(this).attr("type") == "text" ? "orange" : null;
//       // 背景色をオレンジ色にする
//       $(this).css("background", color);
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll(":disabled");
//     for (let i = 0; i < ele.length; i++) {
//       // テキストフィールドだけを対象にする
//       if (ele[i].type === "text") {
//         // 背景色オレンジ色にする
//         ele[i].style.backgroundColor = "orange";
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll(":disabled");
//     ele.forEach((e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// Arrat.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll(":disabled"), (e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll(":disabled"),
//       result = [...gain].map((e) => {
//         const color = e.type === "text" ? "orange" : null;
//         e.style.backgroundColor = color;
//       });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll(":disabled");
//     Array.from(
//       [...ele].filter((e) => e.type === "text"),
//       (e) => (e.style.background = "orange")
//     );
//   };
// };

// filterメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll(":disabled"))
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(2)/input/input"
    console.dir(document.querySelectorAll(":disabled"));
    const gain = document.querySelectorAll(":disabled");
    const result = [...gain].filter(
      (e) => (e.style.background = e.type === "text" && "orange")
    );
  };
};

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll(":disabled");
//     const result = [...gain]
//       .filter((e) => e.type === "text")
//       .map((e) => (e.style.background = "orange"));
//   };
// };
