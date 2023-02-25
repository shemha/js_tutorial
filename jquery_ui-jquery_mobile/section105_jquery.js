// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList div").wrapInner('<div class="note">');
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let imgs = document.images;

  btn.onclick = () => {
    [...imgs].map((e) => {
      e.outerHTML = `<div class="note">${e.outerHTML}</div>`;
    });
  };
};
