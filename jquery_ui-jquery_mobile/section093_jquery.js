// $(function () {
//   $(":button").click(function () {
//     $("img").remove();
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];

  btn.onclick = () => {
    let img = document.images;
    [...img].map((e) => e.remove());
  };
};
