// $(function () {
//   $(":button:eq(0)").click(function () {
//     var w1 = $("h1").innerWidth();
//     var h1 = $("h1").innerHeight();
//     alert("内側の横幅：" + w1 + "、縦幅：" + h1);
//   });
//   $(":button:eq(1)").click(function () {
//     var w2 = $("h1").outerWidth();
//     var h2 = $("h1").outerHeight();
//     alert("外側の横幅：" + w2 + "、縦幅：" + h2);
//   });
//   $(":button:eq(2)").click(function () {
//     var w = $("h1").outerWidth(true);
//     var h = $("h1").outerHeight(true);
//     alert("枠を含む外側の横幅：" + w + "、横幅：" + h);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btns = document.forms[0];
  let h1 = document.getElementsByTagName("h1")[0];

  btns[0].onclick = () => {
    let w = h1.clientWidth;
    let h = h1.clientHeight;
    alert("横幅: " + w + ", 縦幅: " + h);
  };
  btns[1].onclick = () => {
    let w = h1.scrollWidth;
    let h = h1.scrollHeight;
    alert("横幅: " + w + ", 縦幅: " + h);
  };
  btns[2].onclick = () => {
    let w = h1.offsetWidth;
    let h = h1.offsetHeight;
    alert("横幅: " + w + ", 縦幅: " + h);
  };
};
