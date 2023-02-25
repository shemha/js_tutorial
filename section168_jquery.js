// $(function () {
//   var flg = "off";
//   $("#btn1").click(function () {
//     if (flg == "off") {
//       $("#photo1").hide(3000);
//       flg = "on";
//     } else {
//       $("#photo1").show(3000);
//       flg = "off";
//     }
//   });
//   $("#btn2").click(function () {
//     $("#photo1").stop();
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  const $1 = {
      width: "160px",
      height: "120px",
      opacity: 1,
    },
    $2 = {
      width: "0px",
      height: "0px",
      opacity: 0,
    };

  const keyframes = [$1, $2];
  const timingOptions = { duration: 3000 };

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
    animation.pause();
  };
};
