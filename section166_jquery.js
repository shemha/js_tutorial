// $(function () {
//   $("#myWindow").scroll(function (event) {
//     var x = $(this).scrollLeft();
//     var y = $(this).scrollTop();
//     $("output:first").text(x + " , " + y);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  myWindow.addEventListener("scroll", (evt) => {
    let x = evt.target.scrollLeft;
    let y = evt.target.scrollTop;
    op.textContent = `${x}, ${y}`;
  });
};
