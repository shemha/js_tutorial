// $(function () {
//   $("#photo1").mousemove(function (evt) {
//     var mouseX = evt.pageX;
//     var mouseY = evt.pageY;
//     var eType = evt.type;
//     $("output:first").text(eType + " : " + mouseX + " , " + mouseY);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  photo1.onmousemove = (evt) => {
    let mouseX = evt.layerX;
    let mouseY = evt.layerY;
    let eType = evt.type;
    op.textContent = `${eType} : ${mouseX} , ${mouseY}`;
  };
};
