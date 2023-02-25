// $(function () {
//   $("*").click(function (evt) {
//     var cTarget = evt.currentTarget;
//     var htmltext = $("output:first").html();
//     $("output:first").html(htmltext + "<br>currentTarget : " + cTarget);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  let all = document.querySelectorAll("*");
  [...all].map((e) => {
    e.onclick = (evt) => {
      let cTarget = evt.currentTarget;
      let htmltext = op.innerHTML;
      op.innerHTML = htmltext + "<br>currentTarget : " + cTarget;
    };
  });
};
