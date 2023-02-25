// $(function () {
//   $("input").blur(function (event) {
//     $("input").css("background-color", "white");
//     $(this).css("background-color", "orange");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let ips = document.forms[0];

  [...ips].map((e) => {
    e.onblur = (evt) => {
      [...ips].map((e) => (e.style.backgroundColor = "white"));
      evt.target.style.backgroundColor = "orange";
    };
  });
};
