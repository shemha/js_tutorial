// $(function () {
//   $("#checkClass").click(function () {
//     alert($("h1").hasClass("caution"));
//   });
//   $("#addClass").click(function () {
//     $("h1").addClass("caution");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btns = document.forms[0];
  let h1 = document.getElementsByTagName("h1")[0];

  btns[0].onclick = () => {
    alert(h1.hasAttribute("class"));
  };

  btns[1].onclick = () => {
    h1.setAttribute("class", "caution");
  };
};
