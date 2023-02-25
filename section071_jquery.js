// $(() => {
//   const ele = $("input");
//   ele.first().css("background", "orange");
//   ele.last().css("background", "orange");
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  // const gain = document.querySelectorAll("input"),
  const gain = document.getElementsByTagName("input"),
    result = [...gain].filter(
      (e, i, arr) =>
        (e.style.background = (i === 0 || i === arr.length - 1) && "orange")
    );
};
