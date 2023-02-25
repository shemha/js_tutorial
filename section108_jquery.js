// $(function () {
//   $(":button:eq(0)").click(function () {
//     var text = $("input:first").val();
//     $("output:first").val(text);
//     $(":button:eq(1)").click(function () {
//       $("input:first").val(Math.random());
//     });
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btns = document.forms[0];
  let txt = document.forms[0][0];
  let content = document.getElementsByTagName("output")[0];

  btns[1].onclick = () => {
    content.textContent = txt.value;
  };
  btns[2].onclick = () => {
    txt.value = Math.random();
    content.textContent = txt.value;
  };
};
