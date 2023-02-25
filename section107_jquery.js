// $(function () {
//   $(":button").click(function () {
//     var content = $("output:first").html();
//     content = content + "<p>" + Math.random() + "</p>";
//     $("output:first").html(content);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let content = document.getElementsByTagName("output")[0];
  btn.onclick = () => {
    content.innerHTML = content.innerHTML + "<p>" + Math.random() + "</p>";
  };
};
