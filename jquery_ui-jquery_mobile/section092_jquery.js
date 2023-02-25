// $(function () {
//   var saveEle;
//   $(":button:eq(0)").click(function () {
//     saveEle = $("img").detach();
//   });
//   $(":button:eq(1)").click(function () {
//     saveEle.appendTo(".parts");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let newImgs = [...document.images].map((e) => e.cloneNode(true));

  btn[0].onclick = () => {
    imageList.remove();
  };
  btn[1].onclick = () => {
    let part = document.getElementsByClassName("parts")[0];
    part.insertAdjacentHTML(
      "beforeend",
      newImgs.map((e) => e.outerHTML).join("")
    );
  };
};
