// $(function () {
//   $(":button").click(function () {
//     var content = $("output:first").text();
//     content = content + Math.random() + ", ";
//     $("output:first").text(content);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let content = document.getElementsByTagName("output")[0];
  btn.onclick = () => {
    content.innerHTML = content.innerHTML + Math.random() + ", ";
  };
};
