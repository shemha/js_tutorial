// $(function () {
//   $("input").keydown(function (event) {
//     $("#kd").fadeTo(0, 1.0).fadeTo("slow", 0);
//   });
//   $("input").keypress(function (event) {
//     $("#kp").fadeTo(0, 1.0).fadeTo("slow", 0);
//   });
//   $("input").keyup(function (event) {
//     $("#ku").fadeTo(0, 1.0).fadeTo("slow", 0);
//   });
// });

// JavaScriptで記述する場合・・・keypressは非推奨なのでdeforeinputに変更
window.addEventListener("DOMContentLoaded", () => {
  let ip = document.forms[0][0];
  let events = ["keydown", "beforeinput", "keyup"];

  ip.addEventListener(events[0], () => {
    kd.animate(
      { opacity: [0, 1, 0] },
      { duration: 100, easing: "ease-in-out" }
    );
  });
  ip.addEventListener(events[1], () => {
    kp.textContent = "beforeinput";
    kp.animate(
      { opacity: [0, 1, 0] },
      { duration: 100, easing: "ease-in-out" }
    );
  });
  ip.addEventListener(events[2], () => {
    ku.animate(
      { opacity: [0, 1, 0] },
      { duration: 100, easing: "ease-in-out" }
    );
  });
});
