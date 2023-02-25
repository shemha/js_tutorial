// $(() => {
//   // ボタンにclickイベントを割り当てる
//   $(":button").click(function () {
//     // value属性値がNexusではない要素を対象にする
//     $("input[value!='Nexus']").each(function () {
//       // テキストフィールドだけを対象にする
//       const color = $(this).attr("type") == "text" ? "orange" : null;
//       // 背景色をオレンジにする
//       $(this).css("background", color);
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const btn = document.querySelectorAll("input[type='button']")[0];
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "text" && ele[i].value !== "Nexus") {
//         ele[i].style.background = "orange";
//       }
//     }
//   };
// };

// for文(id属性を使用した場合)
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     for (let i = 0; i < ele.length; i++) {
//       const color =
//         ele[i].type === "text" && ele[i].value !== "Nexus" ? "orange" : null;
//       ele[i].style.background = color;
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     ele.forEach((e) => {
//       const color = e.type === "text" && e.value !== "Nexus" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input"), (e) => {
//       const color = e.type === "text" && e.value !== "Nexus" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].map((e) => {
//       const color = e.type === "text" && e.value !== "Nexus" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input");
//     Array.from(
//       [...ele].filter((e) => e.type === "text" && e.value !== "Nexus"),
//       (e) => (e.style.background = "orange")
//     );
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain].filter(
//       (e) =>
//         (e.style.background =
//           e.type === "text" && e.value !== "Nexus" && "orange")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input");
//     const result = [...gain]
//       .filter((e) => e.type === "text" && e.value !== "Nexus")
//       .map((e) => (e.style.background = "orange"));
//   };
// };

// type属性を指定
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input[type$='text']");
//     const result = [...gain].filter(
//       (e) => (e.style.background = e.value !== "Nexus" && "orange")
//     );
//   };
// };

// タグ要素を指定
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
    // オブジェクトの階層の確認 ※結果は"NodeList(8)/input/input/input/input/input/input/input/input#btn"
    console.dir(document.querySelectorAll("input"));
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(
        document.querySelectorAll("input[type$='text']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(7)/input"
    console.dir(document.querySelectorAll("input[type$='text']"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection]"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection](8)/input/input/input/input/input/input/input/input#btn"
    console.dir(document.getElementsByTagName("input"));
    const gain = document.getElementsByTagName("input");
    const result = [...gain].filter(
      (e) =>
        (e.style.background =
          e.type === "text" && e.value !== "Nexus" && "orange")
    );
  };
};
