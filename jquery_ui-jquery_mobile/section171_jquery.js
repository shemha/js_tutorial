// $(function () {
//   $("#photo1").click(function () {
//     $(this).fadeTo(250, 0).delay(3000).fadeTo(250, 1.0);
//   });
//   $("#photo2").click(function () {
//     $(this).fadeTo(250, 0).fadeTo(250, 1.0);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  const $1 = {
      opacity: 1,
    },
    $2 = {
      opacity: 0.25,
    };

  const fadeOut = [$1, $2],
    fadeIn = [$2, $1];
  const timingOptions1 = { duration: 250, fill: "forwards" },
    timingOptions2 = { duration: 1000 };

  const effect1 = new KeyframeEffect(photo1, [fadeOut, fadeIn], {
      timingOptions1,
      timingOptions1,
    }),
    effect2 = new KeyframeEffect(photo2, [fadeOut, $2, fadeIn], {
      timingOptions1,
      timingOptions2,
      timingOptions1,
    });
  const animation1 = new Animation(effect1, document.timeline),
    animation2 = new Animation(effect2, document.timeline);

  photo1.onclick = () => {
    animation1.play();
  };
  photo2.onclick = () => {
    animation2.play();
  };
};
