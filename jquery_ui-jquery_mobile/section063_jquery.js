// $(() => {
//   $(":button:eq(0)").click(() => {
//     alert($("input:text:first").val());
//   });
//   $(":button:eq(1)").click(() => {
//     $("input:text:first").val("OpenSpace");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn1.onclick = () => alert(txt.value);
  btn2.onclick = () => (txt.value = "OpenSpace");
};
