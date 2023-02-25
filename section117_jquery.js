// $(function () {
//   $("#readCSS").click(function () {
//     alert($("#myHeader").css("width"));
//   });
//   $("#setCSS").click(function () {
//     $("#myHeader").css("width", "320px");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  readCSS.onclick = () => {
    alert(myHeader.offsetWidth);
  };
  setCSS.onclick = () => {
    myHeader.style.width = "320px";
  };
};
