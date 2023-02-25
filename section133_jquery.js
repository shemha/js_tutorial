// $(function () {
//   $("img").click(dispEventType);
//   $("img").bind("mouseover", dispEventType);
//   $("img").bind("mouseout", dispEventType);
//   function dispEventType(evt) {
//     var eType = evt.type;
//     $("output:first").text(eType);
//   }
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let img = document.images[0];
  let op = document.getElementsByTagName("output")[0];
  img.onclick = (evt) => {
    dispEventType(evt);
  };
  img.onmouseover = (evt) => {
    dispEventType(evt);
  };
  img.onmouseout = (evt) => {
    dispEventType(evt);
  };
  function dispEventType(evt) {
    let eType = evt.type;
    op.textContent = eType;
  }
};
