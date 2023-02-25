// $(function () {
//   $(":button:first").on("click", function () {
//     $("div:first").append(
//       '<img src="124/photo2.jpg" width="160" height="120" alt="">'
//     );
//   });
//   $("img").on("mouseover", function () {
//     $(this).fadeTo("fast", 0.25);
//   });
//   $("img").on("mouseout", function () {
//     $(this).fadeTo("fast", 1.0);
//   });
//   $(document).on("click", "img", function () {
//     alert("クリックされました");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let div = document.getElementsByTagName("div")[0];
  let fstImg = div.firstElementChild;

  fstImg.onclick = () => {
    alert("クリックされました");
  };

  fstImg.onmouseover = (evt) => {
    evt.target.animate(
      {
        opacity: ["1.0", "0.3"],
      },
      {
        fill: "forwards",
        duration: 250,
      }
    );
  };

  fstImg.onmouseout = (evt) => {
    evt.target.animate(
      {
        opacity: ["0.3", "1.0"],
      },
      {
        fill: "forwards",
        duration: 1000,
      }
    );
  };

  btn.onclick = () => {
    div.insertAdjacentHTML(
      "beforeend",
      '<img src="124/photo2.jpg" width="160" height="120" alt="">'
    );
    div.lastElementChild.onclick = () => {
      alert("クリックされました");
    };
  };
};
