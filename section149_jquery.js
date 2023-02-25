// $(function () {
//   $("#photo1").dblclick(function () {
//     $(this).fadeTo(200, 0.5);
//     $("output:first").text("ダブルクリックイベント発生");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  photo1.ondblclick = (evt) => {
    op.textContent = "ダブルクリックイベント発生";
    evt.target.animate(
      {
        opacity: ["1.0", "0.5"],
      },
      {
        fill: "forwards",
        duration: 200,
      }
    );
  };
};
