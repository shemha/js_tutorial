// $(function () {
//   $("#photo1").click(function () {
//     $(this).fadeTo(250, 0.25).delay(500).fadeTo(250, 1.0);
//     $("output:first").text("画像でクリックイベント：" + Date.now());
//   });
//   $("#sendEvent").click(function () {
//     $("#photo1").trigger("click");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  const $1 = {
      opacity: 1,
    },
    $2 = {
      opacity: 0.25,
    },
    $3 = {
      opacity: 0.25,
    },
    $4 = {
      opacity: 1,
    };
  const keyframes = [$1, $2, $3, $4];
  const timingOptions = { duration: 1000 };

  const photo = document.getElementById("photo1");
  const effect = new KeyframeEffect(photo, keyframes, timingOptions);
  const animation = new Animation(effect, document.timeline);
  let op = document.getElementsByTagName("output")[0];

  photo.onclick = () => {
    animation.play();
    op.textContent = "画像でクリックイベント：" + Date.now();
  };
  sendEvent.onclick = () => {
    const triggerEvent = new Event("click");
    photo.dispatchEvent(triggerEvent);
  };
};
