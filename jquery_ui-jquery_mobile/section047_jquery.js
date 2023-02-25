// $(() => {
//   $(":button").click(function () {
//     $(":checkbox").each(function () {
//       $(this).attr("checked", false);
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     const ele = document.querySelectorAll("input[type='checkbox']");
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].checked = false;
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     const ele = document.querySelectorAll("input[type='checkbox']");
//     ele.forEach((e) => (e.checked = false));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     Array.from(
//       document.querySelectorAll("input[type='checkbox']"),
//       (e) => (e.checked = false)
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
        document.querySelectorAll("input[type='checkbox']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(2)/input"
    console.dir(document.querySelectorAll("input[type='checkbox']"));
    const gain = document.querySelectorAll("input[type='checkbox']");
    const result = [...gain].filter((e) => (e.checked = false));
  };
};
