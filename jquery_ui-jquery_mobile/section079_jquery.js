// $(function () {
//   $("img").click(function () {
//     $(this).offsetParent().css("background-color", "yellow");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let img = document.images;
  for (i in img) {
    img[i].onclick = (evt) => {
      evt.target.offsetParent.style.backgroundColor = "yellow";
    };
  }
};
