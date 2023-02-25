// $(function () {
//   // ボタンにclickイベントを割り当て
//   $(":button").click(function () {
//     // td要素が親要素なら背景色をオレンジ色にする
//     $("td:parent").css("background-color", "orange");
//   });
// });

// JavaScriptで記述した場合・・・
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("td");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].childNodes.length > 0) {
//         ele[i].style.background = "orange";
//       }
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("td");
//     ele.forEach((e) => {
//       const color = e.childNodes.length > 0 ? "orange" : null;
//       e.style.background = color;
//     });
//   };
// };

// Array.formメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("td");
//     Array.from(ele, (e) => {
//       const color = e.childNodes.length > 0 ? "orange" : null;
//       e.style.background = color;
//     });
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("td");
//     Array.from(
//       [...ele].filter((e) => e.childNodes.length > 0),
//       (e) => (e.style.background = "orange")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("td");
//     const result = [...gain].filter(
//       (e) => (e) => (e.style.background = e.childNodes.length > 0 && "orange")
//     );
//   };
// };

// メソッドチェーン
// window.onload = () => {
//   btn.onclick = () => {
//     const gain = document.querySelectorAll("td");
//     const result = [...gain]
//       .filter((e) => e.childNodes.length > 0)
//       .map((e) => (e.style.background = "orange"));
//   };
// };

// タグ要素で取得(filterメソッド)
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("td"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(24)/td"
    console.dir(document.getElementsByTagName("td"));
    // オブジェクトの種類の確認 ※結果は"Undefined"
    console.log(
      Object.prototype.toString.call(
        document.getElementsByTagName("td").childNodes
      )
    );
    // オブジェクトの階層の確認 ※結果は"undefined"
    console.dir(document.getElementsByTagName("td").childNodes);
    const gain = document.getElementsByTagName("td");
    const result = [...gain].filter((e) => {
      // オブジェクトの種類の確認 ※結果は"NodeList"
      console.log(Object.prototype.toString.call(e.childNodes));
      // オブジェクトの階層の確認 ※結果は"NodeList(1)/text|NodeList(0)"
      console.dir(e.childNodes);
      e.style.background = e.childNodes.length && "orange";
    });
  };
};
