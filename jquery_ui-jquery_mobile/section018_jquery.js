// $(function () {
//   // ボタンにclickイベントを割り当てる
//   $(":button").click(function () {
//     // 最初のinput要素を指定する
//     $("input:first").each(function () {
//       // 背景色をオレンジ色にする
//       $(this).css("background", "orange");
//     });
//   });
// });

// JavaScriptで記述した場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"HTMLSelectElement"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("input"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLInputElement(8)/input/input/input/input/input/input/input/input#btn"
    console.dir(document.getElementsByTagName("input"));
    // オブジェクトの種類の確認 ※結果は"CSSStyleDeclaration"
    console.log(
      Object.prototype.toString.call(
        document.getElementsByTagName("input")[0].style
      )
    );
    // オブジェクトの階層の確認 ※結果は"CSSStyleDeclaration"
    console.dir(document.getElementsByTagName("input")[0].style);
    // オブジェクトの種類の確認 ※結果は"String"
    console.log(
      Object.prototype.toString.call(
        document.getElementsByTagName("input")[0].style.background
      )
    );
    // オブジェクトの階層の確認 ※存在なし
    console.dir(document.getElementsByTagName("input")[0].style.background);
    document.forms[0].firstElementChild.style.background = "orange";
  };
};
