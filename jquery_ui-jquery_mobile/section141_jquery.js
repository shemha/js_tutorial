// $(function () {
//   $("a:first").click(function (evt) {
//     alert("イベント発生1");
//     evt.preventDefault();
//   });
//   $("a:eq(1)").click(function (evt) {
//     alert("イベント発生2");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let aTags = document.getElementsByTagName("a");

  aTags[0].onclick = (evt) => {
    alert("イベント発生1");
    evt.preventDefault();
  };

  aTags[1].onclick = () => {
    alert("イベント発生2");
  };
};
