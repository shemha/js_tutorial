// $(function () {
//   $("#btn").click(function () {
//     $("h1").removeClass("caution");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let h1 = document.getElementsByTagName("h1")[0];

  btn.onclick = () => {
    let cls = h1.getAttribute("class");
    let newCls = cls.replace("caution", "");
    h1.setAttribute("class", newCls);
  };
};
