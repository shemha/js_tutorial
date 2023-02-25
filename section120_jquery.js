// $(function () {
//   $("#btn1").click(function () {
//     var coords = $("h1").offset();
//     var x = coords.left;
//     var y = coords.top;
//     alert("X：" + x + "、Y：" + y);
//   });
//   $("#btn2").click(function () {
//     $("h1").offset({ left: 20, top: 40 });
//   });
// });

// JavaScriptで記述する場合・・・（うまくいかない）
window.onload = () => {
  let h1 = document.getElementsByTagName("h1")[0];

  btn1.onclick = () => {
    let x = h1.offsetLeft;
    let y = h1.offsetTop;
    alert("X：" + x + "、Y：" + y);
  };
  btn2.onclick = () => {
    h1.style.offsetPosition = "left 20px top 40px";
  };
  // btns[2].onclick = () => {
  //   let w = h1.offsetWidth;
  //   let h = h1.offsetHeight;
  //   alert("横幅: " + w + ", 縦幅: " + h);
  // };
};
