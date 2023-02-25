// $(() => {
//   // ID名prefのセレクトメニューにchangeイベントを設定する
//   $("#pref").change(() => {
//     // 選択された項目名を表示する
//     $("output:first").text($("pref option:selected").text());
//   });
// });

// JavaScriptで記述した場合・・・
// window.onload = () => {
//   pref.addEventListener("change", function () {
//     document.getElementsByTagName("output")[0].innerHTML = this.value;
//   });
// };

// アロー関数式
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLSelectElement"
  console.log(Object.prototype.toString.call(pref));
  // オブジェクトの階層の確認 ※結果は"select#pref"
  console.dir(pref);
  pref.onchange = (evt) => {
    document.getElementsByTagName("output")[0].innerHTML = evt.target.value;
    // オブジェクトの種類の確認 ※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("output"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/output"
    console.dir(document.getElementsByTagName("output"));
  };
};
