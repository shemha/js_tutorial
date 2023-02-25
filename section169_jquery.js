// 下記構文はjQueryのバージョンは2.2.4以前まで有効
// $(function () {
//   var flg = "off";
//   $("#btn1").click(function () {
//     if (flg == "off") {
//       $("#photo1").fadeOut();
//       flg = "on";
//     } else {
//       $("#photo1").fadeIn();
//       flg = "off";
//     }
//   });
//   $("#btn2").click(function () {
//     $.fx.interval = parseFloat($("#msec").val());
//   });
// });

// JavaScriptで記述する場合・・・思ってた動きじゃない
window.onload = () => {
  const $1 = {
      opacity: 1,
    },
    $2 = {
      opacity: 0,
    };

  const keyframes = [$1, $2];
  const timingOptions = { duration: 1000, fill: "forwards", delay: 130 };

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
    const txtVal = msec.value;
    const animeTiming = animation.effect;
    const result = animeTiming.updateTiming({
      delay: parseFloat(txtVal),
    });
  };
};
