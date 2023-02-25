// $(function () {
//   $("img").mouseover(function (evt) {
//     var eTarget1 = evt.relatedTarget;
//     var htmltext1 = $("output:first").html();
//     $("output:first").html(htmltext1 + "<br>[mouseover前]" + eTarget1);
//   });
//   $("img").mouseout(function (evt) {
//     var eTarget2 = evt.relatedTarget;
//     var htmltext2 = $("output:first").html();
//     $("output:first").html(htmltext2 + "<br>[mouseout前]" + eTarget2);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  let imgs = document.images;
  [...imgs].map((e) => {
    e.onmouseover = (evt) => {
      let eTarget1 = evt.relatedTarget;
      let htmltext1 = op.innerHTML;
      op.innerHTML = htmltext1 + "<br>[mouseover前]" + eTarget1;
    };
    e.onmouseout = (evt) => {
      let eTarget2 = evt.relatedTarget;
      let htmltext2 = op.innerHTML;
      op.innerHTML = htmltext2 + "<br>[mouseout前]" + eTarget2;
    };
  });
};
