// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img").wrap('<div class="mark">');
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let imgs = document.images;

  btn[0].onclick = () => {
    [...imgs].map((e) => {
      e.outerHTML = `<div class="mark">${e.outerHTML}</div>`;
    });
  };
};
