// $(function(){
//     $(":button:eq(0)").click(function(){
//         $("#imageList").children("img").css("opacity", 0.3);
//     });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  btn.onclick = () => {
    [...imageList.children].filter((e) => {
      e.style.opacity = e.tagName !== "IMG" || "0.3";
    });
  };
};
