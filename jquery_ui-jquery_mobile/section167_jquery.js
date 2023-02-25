// $(function () {
//   $("#startAnime").click(function () {
//     $("#photo1").animate({
//       width: 40,
//       height: 30,
//       opacity: "-=0.25",
//     });
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  startAnime.onclick = () => {
    photo1.animate(
      {
        width: "40px",
        height: "30px",
        opacity: 0.5,
      },
      {
        duration: 200,
        fill: "forwards",
      }
    );
  };
};
