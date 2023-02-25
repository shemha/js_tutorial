// $(function(){
//     $(":button:eq(0)").click(function(){
//         $('<img src="104/note.png">').prependTo(".note");
//     });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let btn = document.forms[0];
  let note = document.getElementsByClassName("note");
  let flag = true;
  btn.onclick = () => {
    if (flag) {
      [...note].map((e) => {
        e.insertAdjacentHTML("afterbegin", '<img src="104/note.png">');
      });
      flag = false;
    }
  };
};
