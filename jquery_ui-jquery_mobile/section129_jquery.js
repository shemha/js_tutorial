// $(function () {
//   $("img").bind("click", function () {
//     $("output:first").text("clickイベント発生");
//   });
//   $("img").bind("mouseover", function () {
//     $("output:first").text("mouseoverイベント発生");
//   });
//   $("img").bind("mouseout", function () {
//     $("output:first").text("mouseoutイベント発生");
//   });
//   $("#one").click(function () {
//     $("img").unbind("click");
//     $("output:first").text("clickイベントを解除しました");
//   });
//   $("#all").click(function () {
//     $("img").unbind();
//     $("output:first").text("全てのイベントを解除しました");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let flag = "eventOn";
  let btns = document.forms[0];
  let img = document.images[0];
  let op = document.getElementsByTagName("output")[0];

  const onClick = () => {
    op.textContent = "clickイベント発生";
  };

  const onMouseover = () => {
    op.textContent = "mouseoverイベント発生";
  };

  const onMouseout = () => {
    op.textContent = "mouseoutイベント発生";
  };

  if (flag === "eventOn") {
    img.addEventListener("click", onClick, false);
    img.addEventListener("mouseover", onMouseover, false);
    img.addEventListener("mouseout", onMouseout, false);
  } else if (flag === "clickOff") {
    img.addEventListener("mouseover", onMouseover, false);
    img.addEventListener("mouseout", onMouseout, false);
  }

  btns[0].onclick = () => {
    img.removeEventListener("click", onClick, false);
    flag = "clickOff";
  };

  btns[1].onclick = () => {
    img.removeEventListener("click", onClick, false);
    img.removeEventListener("mouseover", onMouseover, false);
    img.removeEventListener("mouseout", onMouseout, false);
    flag = "eventOff";
  };
};
