// $(function () {
//   $(document).mousemove(function (evt) {
//     var mouseX = evt.originalEvent.screenX;
//     var mouseY = evt.originalEvent.screenY;
//     var eType = evt.type;
//     $("output:first").text(eType + " : " + mouseX + ", " + mouseY);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  document.onmousemove = (evt) => {
    let musX = evt.screenX;
    let musY = evt.screenY;
    let eType = evt.type;
    op.textContent = `${eType} : ${musX}, ${musY}`;
  };
};
