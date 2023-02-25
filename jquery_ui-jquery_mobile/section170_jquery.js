// $(function () {
//   var flg = "off";
//   $("#btn1").click(function () {
//     if (flg == "off") {
//       $("#photo1").fadeOut("slow");
//       flg = "on";
//     } else {
//       $("#photo1").fadeIn("slow");
//       flg = "off";
//     }
//   });
//   // 以降の構文の意味とは？
//   $("#btn2").click(function () {
//     $.fx.off = false;
//   });
//   $("#btn3").click(function () {
//     $.fx.off = ture;
//   });
// });

// JavaScriptで記述する場合・・・こんなかんじ？
window.onload = () => {
  const $1 = {
      opacity: 1,
    },
    $2 = {
      opacity: 0,
    };

  const keyframes = [$1, $2];
  const timingOptions = { duration: 1000, fill: "forwards" };

  const photo = document.getElementById("photo1");
  const effect = new KeyframeEffect(photo, keyframes, timingOptions);
  const animation = new Animation(effect, document.timeline);

  let flg = true;
  btn1.onclick = () => {
    if (flg) {
      animation.play();
      flg = false;
    } else {
      animation.reverse();
      flg = true;
    }
  };
  btn2.onclick = () => {
    animation.idle();
  };
  btn3.onclick = () => {
    animation.cancel();
  };
};
