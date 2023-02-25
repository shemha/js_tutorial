// $(function () {
//   $("#getWidth").click(function () {
//     var w = $("h1").width();
//     var h = $("h1").height();
//     alert("横幅: " + w + ", 縦幅: " + h);
//   });
//   $("#setWidth").click(function () {
//     $("h1").width("320px");
//     $("h1").height("140px");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let h1 = document.getElementsByTagName("h1")[0];
  getWidth.onclick = () => {
    let w = h1.offsetWidth;
    let h = h1.offsetHeight;
    alert("横幅: " + w + ", 縦幅: " + h);
  };
  setWidth.onclick = () => {
    h1.style.width = "320px";
    h1.style.height = "140px";
  };
};
