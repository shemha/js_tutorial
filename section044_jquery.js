// $(() => {
//   $(":button").click(function () {
//     $("input[value*='Nexus']").each(function () {
//       const color = $(this).attr("text") == "text" ? "orange" : null;
//       $(this).css("background", color);
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// for文(type属性を使用した場合)
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input[value*='Nexus']");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type == "text") {
//         ele[i].style.background = "orange";
//       }
//     }
//   };
// };

// for文(id属性を使用した場合)
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input[value*='Nexus']");
//     for (let i = 0; i < ele.length; i++) {
//       const color = ele[i].type === "text" ? "orange" : null;
//       ele[i].style.background = color;
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input[value*='Nexus']");
//     ele.forEach((e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(document.querySelectorAll("input[value*='Nexus']"), (e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.backgroundColor = color;
//     });
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input[value*='Nexus']"),
//       result = [...gain].map((e) => {
//         const color = e.type === "text" ? "orange" : null;
//         e.style.backgroundColor = color;
//       });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input[value*='Nexus']");
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
      Object.prototype.toString.call(
        document.querySelectorAll("input[value*='Nexus']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(4)/input/input/input/input#btn"
    console.dir(document.querySelectorAll("input[value*='Nexus']"));
    const gain = document.querySelectorAll("input[value*='Nexus']");
    const result = [...gain].filter(
      (e) => (e.style.background = e.type === "text" && "orange")
    );
  };
};

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("input[value*='Nexus']");
//     const result = [...gain]
//       .filter((e) => e.type === "text")
//       .map((e) => (e.style.background = "orange"));
//   };
// };
