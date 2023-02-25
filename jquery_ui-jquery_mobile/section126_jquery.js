// $(function () {
//   $("img").bind("click", function () {
//     var altText = this.alt;
//     $("output:first").text( altText);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let imgs = document.images;
  let op = document.getElementsByTagName("output")[0];

  [...imgs].map((e) => {
    e.onclick = (evt) => {
      let txt = evt.target.getAttribute("alt");
      op.textContent = "クリックイベント発生：" + txt;
    };
  });
};
