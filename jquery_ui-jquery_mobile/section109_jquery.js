// $(function () {
//   $(":button:eq(0)").click(function () {
//     var altText = $("#imageList img:first").attr("alt");
//     $("output:first").text(altText);
//   });
//   $(":button:eq(1)").click(function () {
//     $("#imageList img:first").attr("title", "国宝です");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btns = document.forms[0];
  let img = document.images[0];
  let content = document.getElementsByTagName("output")[0];

  btns[0].onclick = () => {
    let alt = img.getAttribute("alt");
    content.textContent = alt;
  };

  btns[1].onclick = () => {
    img.setAttribute("title", "国宝です");
  };
};
