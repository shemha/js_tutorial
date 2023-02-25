// JQuery、うまくいかない・・・
// $(function () {
//   // 最初のボタンにイベントを割り当て
//   $(":button:eq(0)").click(function () {
//     $("img:hidden").each(function () {
//       // 要素に枠を付ける
//       $("img").css("border", "4px solid blue");
//     });
//   });
//   // 2番目のボタンにイベントを割り当て
//   $(":button:eq(1)").click(function () {
//     $("img").show();
//   });
// });

// JavaScriptで記述する場合・・・
// for文
// window.onload = () => {
//   btn1.onclick = () => {
//     const ele1 = document.querySelectorAll("img");
//     for (let i = 0; i < ele1.length; i++) {
//       if (ele1[i].style.display === "none") {
//         ele1[i].style.border = "4px solid blue";
//       }
//     }
//   };
//   btn2.onclick = () => {
//     const ele2 = document.querySelectorAll("img");
//     for (let i = 0; i < ele2.length; i++) {
//       ele2[i].style.display = "";
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn1.onclick = () => {
//     const ele1 = document.querySelectorAll("img");
//     ele1.forEach((e) => {
//       if (e.style.display !== "none") {
//         e.style.border = "4px solid blue";
//       }
//     });
//   };
//   btn2.onclick = () => {
//     const ele2 = document.querySelectorAll("img");
//     ele2.forEach((e) => (e.style.display = ""));
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn1.onclick = () => {
//     const gain1 = document.querySelectorAll("img");
//     const result1 = [...gain1].map((e) => {
//       if (e.style.display !== "none") {
//         e.style.border = "4px solid blue";
//       }
//     });
//   };
//   btn2.onclick = () => {
//     const gain2 = document.querySelectorAll("img");
//     const result2 = [...gain2].map((e) => (e.style.display = ""));
//   };
// };

// filterメソッド
// window.onload = () => {
//   btn1.onclick = () => {
//     const ele1 = document.querySelectorAll("img");
//     Array.from(
//       [...ele1]
//         .filter((e) => e.style.display !== "none")
//         .map((e) => (e.style.border = "4px solid blue"))
//     );
//   };
//   btn2.onclick = () => {
//     const ele2 = document.querySelectorAll("img");
//     Array.from([...ele2].map((e) => (e.style.display = "")));
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn1.onclick = () => {
//     const gain1 = document.querySelectorAll("img");
//     const result1 = [...gain1]
//       .filter((e) => e.style.display !== "none")
//       .map((e) => (e.style.border = "4px solid blue"));
//   };
//   btn2.onclick = () => {
//     const gain2 = document.querySelectorAll("img");
//     const result2 = [...gain2].map((e) => (e.style.display = ""));
//   };
// };

// imagesプロパティで画像を取得
// window.onload = () => {
//   btn1.onclick = () => {
//     const gain1 = document.images;
//     const result1 = [...gain1]
//       .filter((e) => e.style.display !== "none")
//       .map((e) => (e.style.border = "4px solid blue"));
//   };
//   btn2.onclick = () => {
//     const gain2 = document.images;
//     const result2 = [...gain2].map((e) => (e.style.display = ""));
//   };
// };

// imagesプロパティで画像を取得
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn1));
  // オブジェクトの階層の確認 ※結果は"input#btn1"
  console.dir(btn1);
  btn1.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll("img"))
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(3)/img"
    console.dir(document.querySelectorAll("img"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(Object.prototype.toString.call(document.images));
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(3)/img"
    console.dir(document.images);
    const gain1 = document.images;
    const result1 = [...gain1].filter(
      (e) => (e.style.border = e.style.display !== "none" && "4px solid blue")
    );
  };
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn2));
  // オブジェクトの階層の確認 ※結果は"input#btn2"
  console.dir(btn2);
  btn2.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll("img"))
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(3)/img"
    console.dir(document.querySelectorAll("img"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(Object.prototype.toString.call(document.images));
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(3)/img"
    console.dir(document.images);
    const gain2 = document.images;
    const result2 = [...gain2].map((e) => (e.style.display = ""));
  };
};
