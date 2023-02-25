// $(function () {
//   $("#photo1").click(function (evt) {
//     var time = evt.timeStamp;
//     var dateObj = new Date(time);
//     var h = dateObj.getHours();
//     var m = dateObj.getMinutes();
//     var s = dateObj.getSeconds();
//     var ms = dateObj.getMilliseconds();
//     $("output:first").text(h + "時" + m + "分" + s + "秒" + ms);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  let img = document.images[0];
  img.onclick = (evt) => {
    let time = evt.timeStamp;
    let dateObj = new Date(time);
    let h = dateObj.getHours();
    let m = dateObj.getMinutes();
    let s = dateObj.getSeconds();
    let ms = dateObj.getMilliseconds();
    op.textContent = `${h}時${m}分${s}秒${ms}`;
  };
};
