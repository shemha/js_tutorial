// おかしい
// $(function () {
//   $(document).bind("click", function (evt) {
//     $("output:first").text("");
//     $(evt.target)
//       .parentsUntil("bady")
//       .each(function (index) {
//         var htmlText = $("output:first").html();
//         htmlText += this.tagName + "<br>";
//         $("output:first").html(htmlText);
//       });
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];

  document.onclick = (evt) => {
    op.innerHTML = "";
    const prnt1 = evt.target.closest(
      evt.target.parentElement.tagName.toLowerCase()
    );
    const prnt2 = evt.target.closest(
      evt.target.parentElement.parentElement.tagName.toLowerCase()
    );
    op.innerHTML = prnt1.tagName + "<br>" + prnt2.tagName + "<br>";
  };
};
