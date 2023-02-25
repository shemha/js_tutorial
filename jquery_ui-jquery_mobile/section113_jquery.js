// $(function () {
//   $("#addButton").click(function () {
//     $("h1").addClass("contion");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let h1 = document.getElementsByTagName("h1")[0];

  btn.onclick = () => {
    h1.setAttribute("class", "contion");
  };
};
