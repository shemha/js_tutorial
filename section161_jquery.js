// $(function () {
//   $(document).mousemove(function (evt) {
//     var mouseX = evt.pageX;
//     var mouseY = evt.pageY;
//     var eType = evt.type;
//     $("output:first").text(eType + " : " + mouseX + ", " + mouseY);
//   });
// });

// JavaScriptで記述する場合・・・
window.addEventListener("DOMContentLoaded", () => {
  let op = document.getElementsByTagName("output")[0];

  document.onmousemove = (evt) => {
    let mouseX = evt.pageX;
    let mouseY = evt.pageY;
    let eType = evt.type;
    op.textContent = `${eType} : ${mouseX} , ${mouseY}`;
  };
});
