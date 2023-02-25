// $(function () {
//   $("#photo1").mousedown(function () {
//     $(this).fadeTo(50, 0.5);
//     $("output:first").text("マウスダウンイベント発生");
//   });
//   $("#photo1").mouseup(function () {
//     $(this).fadeTo(50, 1.0);
//     $("output:first").text("マウスアップイベント発生");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  photo1.onmousedown = (evt) => {
    op.textContent = "マウスダウンイベント発生";
    evt.target.animate(
      {
        opacity: ["1.0", "0.5"],
      },
      {
        fill: "forwards",
        duration: 100,
      }
    );
  };
  photo1.onmouseup = (evt) => {
    op.textContent = "マウスアップイベント発生";
    evt.target.animate(
      {
        opacity: ["0.5", "1.0"],
      },
      {
        fill: "forwards",
        duration: 100,
      }
    );
  };
};
