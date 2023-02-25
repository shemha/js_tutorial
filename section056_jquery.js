// $(() => {
//   $(":button").click(() => {
//     $(":file").each(function () {
//       const filename = $(this).val();
//       alert(filename);
//     });
//   });
// });

// JavaScriptで記述する場合・・・？
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "file") {
//         alert(ele[i].value);
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => {
//       if (e.type === "file") {
//         alert(e.value);
//       }
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input"), (e) => {
//       if (e.type === "file") {
//         alert(e.value);
//       }
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input"),
//       result = [...gain].map((e) => {
//         if (e.type === "file") {
//           alert(e.value);
//         }
//       });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     Array.from(
//       [...ele].filter((e) => e.type === "file"),
//       (e) => alert(e.value)
//     );
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].filter((e) =>
//       e.type === "file" ? alert(e.value) : ""
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain]
//       .filter((e) => e.type === "file")
//       .map((e) => alert(e.value));
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
    // オブジェクトの階層の確認 ※結果は"NodeList(2)/input"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(2)/input"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].filter((e) =>
      e.type === "file" ? alert(e.value) : ""
    );
  };
};
