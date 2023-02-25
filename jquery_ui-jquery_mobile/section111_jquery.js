// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img").wrapAll('<div class="mark">');
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let newImgs = [...document.images].map((e) => e.cloneNode(true));

  btn.onclick = () => {
    [...document.images].map((e) => e.remove());
    imageList.insertAdjacentHTML(
      "afterbegin",
      `<div class="mark">
      ${newImgs.map((e) => e.outerHTML)}
      </div>`
    );
  };
};
