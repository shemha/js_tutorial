// $(() => {
//   // ボタンにclickイベントを割り当てる
//   $(":button").click(() => {
//     // downクラスではないtd要素の文字色を黒にする
//     $("td:not(.down)").css("color", "black");
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("td:not(.down)");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.color = "black";
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("td:not(.down)");
//     ele.forEach((e) => (e.style.color = "black"));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll("td:not(.down)"),
//       (e) => (e.style.color = "black")
//     );
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("td:not(.down)");
//     const result = [...gain].map((e) => (e.style.color = "black"));
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
      Object.prototype.toString.call(document.querySelectorAll("td:not(.down)"))
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(21)/td"
    console.dir(document.querySelectorAll("td:not(.down)"));
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("td"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(24)/td"
    console.dir(document.getElementsByTagName("td"));
    const gain = document.getElementsByTagName("td");
    const result = [...gain].filter(
      (e) => (e.style.color = !e.className && "black")
    );
  };
};
