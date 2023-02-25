// $(function () {
//   $(":button:eq(0)").click(function () {
//     $("#noteList li").prepend('<img src="103/note.png">');
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let liTags = noteList.children;

  btn.addEventListener(
    "click",
    () => {
      [...liTags].map((e) =>
        e.insertAdjacentHTML("afterbegin", '<img src="103/note.png">')
      );
    },
    { once: true }
  );
};
