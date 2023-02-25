// $(function () {
//   $("input").change(function (event) {
//     $(this).css("background-color", "orange");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let ips = document.forms[0];

  [...ips].map((e) => {
    e.onchange = (evt) => {
      evt.target.style.backgroundColor = "orange";
    };
  });
};
