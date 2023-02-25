// $(function () {
//   $("button:eq(0)").click(function (evt) {
//     console.dir($("img"));
//     $("img").trigger("changeOpacity.gallery");
//     console.dir($("img"));
//   });
//   $("button:eq(1)").click(function (evt) {
//     console.dir($("img"));
//     $("img").trigger("changeOpacity.swap");
//     console.dir($("img"));
//   });
//   $("img").on("changeOpacity.gallery", message);
//   $("img").on("changeOpacity.swap", message);
//   function message(evt) {
//     var ns = evt.namespace;
//     $("output:first").text(ns);
//   }
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btns = document.getElementsByTagName("button");
  let op = document.getElementsByTagName("output")[0];
  let div1 = document.querySelector("div");

  const evt1 = new CustomEvent("changeOpacity", { detail: "gallery" });
  const evt2 = new CustomEvent("changeOpacity", { detail: "swap" });

  div1.addEventListener("changeOpacity", message);
  div1.addEventListener("changeOpacity", message);

  function message(e) {
    let ns = e.detail;
    op.textContent = ns;
  }

  btns[0].onclick = () => {
    div1.dispatchEvent(evt1);
  };
  btns[1].onclick = () => {
    div1.dispatchEvent(evt2);
  };
};
