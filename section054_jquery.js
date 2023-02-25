// $(() => {
//   $(":button").click(() => {
//     $(":image").css("border", "4px solid blue");
//   });
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "image") {
//         ele[i].style.border = "4px solid blue";
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => {
//       const attire = e.type === "image" ? "4px solid blue" : null;
//       e.style.border = attire;
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input"), (e) => {
//       const attire = e.type === "image" ? "4px solid blue" : null;
//       e.style.border = attire;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input"),
//       result = [...gain].map((e) => {
//         const attire = e.type === "image" ? "4px solid blue" : null;
//         e.style.border = attire;
//       });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     Array.from(
//       [...gain].filter(
//         (e) => e.type === "image",
//         (e.style.border = "4px solid blue")
//       )
//     );
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].filter(
//       (e) => (e.style.border = e.type === "image" && "4px solid blue")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain]
//       .filter((e) => e.type === "image")
//       .map((e) => (e.style.border = "4px solid blue"));
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
    // オブジェクトの階層の確認 ※結果は"NodeList(3)/input"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(3)/input"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].filter(
      (e) => (e.style.border = e.type === "image" && "4px solid blue")
    );
  };
};
