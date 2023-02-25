// $(() => {
//   // ボタンにイベントを割り当て
//   $(":button").click(() => {
//     // src属性がある要素に赤い枠をつける
//     $("[src]").css("border", "4px solid red");
//     // $("img[src]").css("border", "4px solid red");
//   });
// });

// JavaScriptを使った場合・・・
// for文(id属性を取得)
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("[src]");
//     // const ele = document.querySelectorAll("img[src]");
//     for (let i = 0; ele.length; i++) {
//       ele[i].style.border = "4px solid red";
//     }
//   };
// };

// for文(type属性を取得)
// window.onload = () => {
//     document.querySelectorAll("input[type=button]")[0].onclick = () => {
//       const ele = document.querySelectorAll("[src]");
//       // let ele = document.querySelectorAll("img[src]");
//       for (let i = 0; ele.length; i++) {
//         ele[i].style.border = "4px solid red";
//       }
//     };
//   };

// NodeListのforEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("[src]");
//     // const ele = document.querySelectorAll("img[src]");
//     ele.forEach((e) => (e.style.border = "4px solid red"));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll("[src]"),
//       // document.querySelectorAll("img[src]"),
//       (e) => (e.style.border = "4px solid red")
//     );
//   };
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  console.log(btn.constructor.name);
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(document.querySelectorAll("[src]"))
    );
    console.log(document.querySelectorAll("[src]").constructor.name);
    // オブジェクトの階層の確認 ※結果は"NodeList(5)/script/script/img/img/div"
    console.dir(document.querySelectorAll("[src]"));
    const gain = document.body.querySelectorAll("[src]");
    const result = [...gain].map((e) => (e.style.border = "4px solid red"));
  };
};
