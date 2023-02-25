// $(() => {
//   // 最初のボタンにイベントを割り当て
//   $(":button:eq(0)").click(() => {
//     // テキストフィールドの内容を表示
//     alert($("date").val());
//   });
//   // 2番目のボタンにイベントを割り当て
//   $(":button:eq(1)").click(() => {
//     // テキストフィールドの内容を設定
//     $("input:text:first").val("2022-04-07");
//   });
// });

// JavaScriptで記述する場合・・・
btn1.onclick = () => alert(date.value);
btn2.onclick = () => (date.value = "2022-04-07");
