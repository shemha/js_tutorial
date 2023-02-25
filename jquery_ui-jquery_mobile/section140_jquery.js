// $(function () {
//   $("#base").on("click", "div", function (evt) {
//     var time = new Date().getTime();
//     var tagDele = evt.delegateTarget;
//     var tagTarget = evt.target;
//     $("output:first").html(
//       "delegate: " +
//         tagDele.id +
//         "<br>target : " +
//         tagTarget.id +
//         "<br>時間: " +
//         time
//     );
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let divTags = document.getElementsByTagName("div");
  let op = document.getElementsByTagName("output")[0];

  base.onclick = (evt) => {
    let time = new Date().getTime();
    let tagDele = evt.target.closest("#base");
    let tagTarget = evt.target;

    op.innerHTML =
      "delegate: " +
      tagDele.id +
      "<br>target : " +
      tagTarget.id +
      "<br>時間: " +
      time;
  };
};
