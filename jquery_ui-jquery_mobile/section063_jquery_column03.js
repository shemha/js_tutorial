// $(() => {
//   // 最初のボタンにイベントを割り当て
//   $(":button:eq(0)").click(() => {
//     // テキストフィールドの内容を表示
//     alert($("#color").val());
//   });
//   // 2番目のボタンにイベントを割り当て
//   $(":button:eq(1)").click(() => {
//     // テキストフィールドの内容を設定
//     $("input:color:first").val("#aaaaaa");
//   });
// });

// JavaScriptで記述する場合・・・
btn1.onclick = () => alert(color.value);
btn2.onclick = () => (color.value = "#aaaaaa");
