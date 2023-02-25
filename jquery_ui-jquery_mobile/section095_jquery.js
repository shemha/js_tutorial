// $(function () {
//   $(":button:eq(0)").click(function () {
//     $('<li><img src="095/note.png">撮影済み</li>').replaceAll("#damList .note");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let note = document.getElementsByClassName("note");
  btn.onclick = () => {
    [...note].map((e) => {
      e.textContent = "撮影済み";
      e.insertAdjacentHTML("afterbegin", '<img src="095/note.png">');
    });
  };
};
