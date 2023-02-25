// $(() => {
//   // 最初のボタンにイベントを割り当て
//   $(":button:eq(0)").click(() => {
//     // テキストフィールドの内容を表示
//     alert($("#aaa").val());
//   });
//   // 2番目のボタンにイベントを割り当て
//   $(":button:eq(1)").click(() => {
//     // テキストフィールドの内容を設定
//     $("input:range:first").val(50);
//   });
// });

// JavaScriptで記述する場合・・・
btn1.onclick = () => alert(vol.value);
btn2.onclick = () => (vol.value = 50);
