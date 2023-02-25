// $(() => {
//   // ボタンにclickイベントを割り当てる
//   $(":button").click(() => {
//     // 背景色をオレンジ色にする
//     $("input[type=text]:last").css("background", "orange");
//   });
// });

// JavaScriptで記述した場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(
        document.querySelectorAll("input[type='text']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(7)/input"
    console.dir(document.querySelectorAll("input[type='text']"));
    const ele = document.querySelectorAll("input[type='text']");
    ele[ele.length - 1].style.background = "orange";
  };
};
