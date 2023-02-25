// $(function () {
//   $("#photo1").hover(
//     function () {
//       $(this).fadeTo(50, 0.5);
//       $("output:first").text("マウスが重なりました");
//     },
//     function () {
//       $(this).fadeTo(50, 1.0);
//       $("output:first").text("マウスが離れました");
//     }
//   );
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  photo1.onmouseover = (evt) => {
    evt.target.animate(
      {
        opacity: ["1.0", "0.5"],
      },
      {
        fill: "forwards",
        duration: 500,
      }
    );
    op.textContent = "マウスが重なりました";
  };

  photo1.onmouseout = (evt) => {
    evt.target.animate(
      {
        opacity: ["0.5", "1.0"],
      },
      {
        fill: "forwards",
        duration: 500,
      }
    );
    op.textContent = "マウスが離れました";
  };
};
