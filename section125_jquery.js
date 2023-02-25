// $(function () {
//   $("#photo1").one("click", function () {
//     $(this).fadeTo(100, 0.5);
//     var dateObj = new Date();
//     var h = dateObj.getHours();
//     var m = dateObj.getMinutes();
//     var s = dateObj.getSeconds();
//     $("output:first").text(h + "時" + m + "分" + s + "秒にクリックしました");
//   });
// });

// JavaScriptで記述する場合・・・
// addEventListenerで設定
// window.onload = () => {
//   let img = document.images[0];
//   let op = document.getElementsByTagName("output")[0];

//   img.addEventListener(
//     "click",
//     function (evt) {
//       evt.target.animate(
//         {
//           opacity: ["1.0", "0.3"],
//         },
//         {
//           fill: "forwards",
//           duration: 500,
//         }
//       );
//       let dateObj = new Date();
//       let h = dateObj.getHours();
//       let m = dateObj.getMinutes();
//       let s = dateObj.getSeconds();
//       op.textContent = `${h}時${m}分${s}秒にクリックしました`;
//     },
//     { once: true }
//   );
// };

// onclickで設定
window.onload = () => {
  let img = document.images[0];
  let op = document.getElementsByTagName("output")[0];

  img.onclick = (evt) => {
    evt.target.animate(
      {
        opacity: ["1.0", "0.3"],
      },
      {
        fill: "forwards",
        duration: 500,
      }
    );
    let dateObj = new Date();
    let h = dateObj.getHours();
    let m = dateObj.getMinutes();
    let s = dateObj.getSeconds();
    op.textContent = `${h}時${m}分${s}秒にクリックしました`;
    evt.path[0].onclick = "";
  };
};
