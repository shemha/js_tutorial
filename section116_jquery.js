// $(function () {
//   $("#btn").click(function () {
//     $("h1").toggleClass("caution");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let h1 = document.getElementsByTagName("h1")[0];

  btn.onclick = () => {
    h1.hasAttributes("class")
      ? h1.removeAttribute("class")
      : h1.setAttribute("class", "caution");
  };
};
