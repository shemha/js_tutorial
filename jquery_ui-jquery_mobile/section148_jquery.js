// "toggle()"メソッドは1.9以前でしか動作しない
// $(function(){
//     $("#photo1").toggle(function(){
//         $(this).fadeTo(100, 0.5);
//         $("output:first").text("不透明度50%");
//     }, function(){
//         $(this).fadeTo(100, 1.0);
//         $("output:first").text("不透明度100%");
//     });
// });

// $(function () {
//   var flg = "off";
//   $("#photo1").click(function () {
//     if (flg == "off") {
//       $(this).fadeTo(100, 0.5);
//       $("output:first").text("不透明度50%");
//       flg = "on";
//     } else {
//       $(this).fadeTo(100, 1.0);
//       $("output:first").text("不透明度100%");
//       flg = "off";
//     }
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let flag = true;
  let op = document.getElementsByTagName("output")[0];
  photo1.onclick = (evt) => {
    if (flag) {
      evt.target.animate(
        {
          opacity: ["1.0", "0.5"],
        },
        {
          fill: "forwards",
          duration: 100,
        }
      );
      op.textContent = "不透明度50%";
      flag = false;
    } else {
      evt.target.animate(
        {
          opacity: ["0.5", "1.0"],
        },
        {
          fill: "forwards",
          duration: 100,
        }
      );
      op.textContent = "不透明度100%";
      flag = true;
    }
  };
};
