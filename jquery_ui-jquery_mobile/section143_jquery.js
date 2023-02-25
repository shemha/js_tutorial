// $(function () {
//   $("#Lv3").click(function (evt) {
//     evt.stopImmediatePropagation();
//     $("output").html(
//       $("output").html() + "<br>(イベント発生): " + evt.currentTarget.id
//     );
//   });
//   $("#Lv2").click(function (evt) {
//     evt.stopPropagation();
//     $("output").html(
//       $("output").html() + "<br>イベント発生: " + evt.currentTarget.id
//     );
//   });
//   $("Lv1").click(function (evt) {
//     $("output").html(
//       $("output").html() + "<br>[イベント発生]: " + evt.currentTarget.id
//     );
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  Lv3.onclick = (evt) => {
    evt.stopImmediatePropagation();
    op.innerHTML = op.innerHTML + "<br>(イベント発生): " + evt.currentTarget.id;
  };
  Lv2.onclick = (evt) => {
    evt.stopPropagation();
    op.innerHTML = op.innerHTML + "<br>(イベント発生): " + evt.currentTarget.id;
  };
  Lv1.onclick = (evt) => {
    op.innerHTML = op.innerHTML + "<br>(イベント発生): " + evt.currentTarget.id;
  };
};
