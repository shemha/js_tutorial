// $(() => {
//   $("#btn").click(() => {
//     $("ol")
//       .css("border-bottom", "1px solid black")
//       .add("div")
//       .css("color", "red");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    const ol = document.getElementsByTagName("ol"),
      div = document.getElementsByTagName("div"),
      addLine = (ol[0].style.borderBottom = "1px solid black"),
      result = [ol[0], ...div].map((e) => (e.style.color = "red"));
  };
};
