// おかしい・・・
// $(function () {
//   $(":button:first").on("click", function () {
//     $("div:first").append(
//       '<img src="128/photo2.jpg" width="160" height="120" alt="">'
//     );
//   });
//   $(":button:eq(1)").on("click", function () {
//     $(this).off("click", "img");
//   });
//   $(this).on("click", "img", function () {
//     alert("クリックされました");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let flag = true;
  let btns = document.forms[0];
  let div = document.getElementsByTagName("div")[0];
  let fstImg = div.firstElementChild;

  const onClick = () => {
    alert("クリックされました");
  };

  fstImg.onclick = (evt) => {
    flag
      ? alert("クリックされました")
      : evt.target.removeEventListener("click", onClick, false);
  };
  btns[0].onclick = () => {
    div.insertAdjacentHTML(
      "beforeend",
      '<img src="128/photo2.jpg" width="160" height="120" alt="">'
    );
    flag ? div.lastElementChild.addEventListener("click", onClick, false) : "";
  };

  btns[1].onclick = () => {
    let imgs = document.images;
    [...imgs].map((e) => {
      e.removeEventListener("click", onClick, false);
      flag = false;
    });
  };
};
