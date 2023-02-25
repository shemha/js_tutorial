// $(() => {
//   // ボタンにclickイベントを割り当てる
//   $(":button").click(() => {
//     // noteのクラス名を持つ要素の背景色をオレンジにする
//     $(".note").css("background", "orange");
//   });
// });

// JavaScriptで記述した場合・・・
// for文(id属性を取得)
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll(".note");
//     for (let i = 0; ele.length; i++) {
//       ele[i].style.background = "orange";
//     }
//   };
// };

// for文(type属性を取得)
// window.onload = () => {
//   document.querySelectorAll("input[type=button]")[0].onclick = () => {
//     const ele = document.querySelectorAll(".note");
//     for (let i = 0; ele.length; i++) {
//       ele[i].style.background = "orange";
//     }
//   };
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll(".note");
//     ele.forEach((e) => (e.style.background = "orange"));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll(".note"),
//       (e) => (e.style.background = "orange")
//     );
//   };
// };

// mapメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll(".note");
//     const result = [...gain].map((e) => (e.style.background = "orange"));
//   };
// };

// クラス名で取得
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  console.log(btn.constructor.name);
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByClassName("note"))
    );
    console.log(document.getElementsByClassName("note").constructor.name);
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/div.note"
    console.dir(document.getElementsByClassName("note"));
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll(".note"))
    );
    console.log(document.querySelectorAll(".note").constructor.name);
    // オブジェクトの階層の確認 ※結果は"NodeList(1)/div.note"
    console.dir(document.querySelectorAll(".note"));
    const gain = document.getElementsByClassName("note");
    const result = [...gain].map((e) => (e.style.background = "orange"));
  };
};
