// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#imageList img:eq(2)").prev().css("opacity", 0.3);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let img = imageList.children[2].previousElementSibling;
  btn.onclick = () => {
    let result = (img.style.opacity = "0.3");
  };
};
