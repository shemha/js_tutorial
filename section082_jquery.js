// $(function () {
//   $(":button:eq(0)").click(function () {
//     $(".hotel").siblings().css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let hotel = document.getElementsByClassName("hotel")[0];
  let preSib = hotel.previousElementSibling;
  let nextSib = hotel.nextElementSibling;
  btn.onclick = () => {
    let result = [preSib, nextSib].map((e) => (e.style.opacity = "0.3"));
  };
};
