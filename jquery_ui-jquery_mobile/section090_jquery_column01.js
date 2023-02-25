// $(function () {
//   // 横幅をアニメーションで変更する
//   function toWide() {
//     // Deferredオブジェクトを作成する
//     var def = new $.Deferred();
//     console.dir(def);
//     $("#myBox").animate({ width: "200px" }, 500, "swing", function () {
//       return def.resolve();
//     }); // コールバック関数内で成功を返す
//     return def.promise(); // Promiseオブジェクトを返す
//   }
//   function toNarrow() {
//     // Deferredオブジェクトを作成する
//     var def = new $.Deferred();
//     $("#myBox").animate({ width: "50px" }, 500, "swing", function () {
//       return def.resolve();
//     }); // コールバック関数内で成功を返す
//     return def.promise(); // Promiseオブジェクトを返す
//   }
//   // アニメーションを開始
//   toWide()
//     // 処理を順番に行うためにthen()を指定する
//     .then(toNarrow) // 幅を狭く
//     .then(toWide) // 幅を広く
//     .then(toNarrow) // 幅を狭く
//     .always(function () {
//       $("#myBox").css("background-color", "red"); // 色を赤くする
//     });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  const divTag = document.getElementById("myBox");
  function toWide() {
    return new Promise((resolve) => {
      divTag.animate({ width: "200px" }, 500, "swing");
      return resolve();
    });
  }
  function toNarrow() {
    return new Promise((resolve) => {
      divTag.animate({ width: "50px" }, 500, "swing");
      return resolve();
    });
  }
  toWide()
    .finished.then(() => {
      toNarrow();
    })
    .finished // 幅を狭く
    .then(() => {
      toWide();
    })
    .finished // 幅を広く
    .then(() => {
      toNarrow();
    })
    .finished // 幅を狭く
    .finally(() => {
      divTag.style.backgroundColor = "red";
    });
};
