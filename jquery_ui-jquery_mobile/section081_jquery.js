// $(function () {
//   $("#master").contents().find("span").css("border", "2px solid red");
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let ele = document.querySelectorAll("*");

  [...ele].map((e) => {
    e.tagName === "SPAN" &&
      e.parentElement.id !== "master" &&
      (e.style.border = "2px solid red");
    e.children.length > 0 ? e : false;
  });
};
