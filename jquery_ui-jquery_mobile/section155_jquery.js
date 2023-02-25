// $(function () {
//   $("input").select(function (event) {
//     var selObj = window.getSelection();
//     var text = selObj.toString();
//     $("output:first").html("以下の文字が選択されました。<br>" + text);
//   });
// });

// JavaScriptで記述する場合・・・ちょっとおかしい
window.addEventListener("DOMContentLoaded", () => {
  let ip = document.forms[0][0];
  let op = document.getElementsByTagName("output")[0];

  document.onselectionchange = (evt) => {
    op.innerHTML = "";
    console.dir(evt.target);
    let txt = evt.target.getSelection().toString();
    op.innerHTML = `以下の文字が選択されました。<br>${txt}`;
  };
});
