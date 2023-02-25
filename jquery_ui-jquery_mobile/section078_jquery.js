// $(function () {
//   $(document).bind("click", function (evt) {
//     var month = $(evt.target).closest("tr").find("th").text();
//     $("output:first").text(month + "の売り上げです");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let op = document.getElementsByTagName("output")[0];
  let ele = sale.lastElementChild.rows;

  for (let i in ele) {
    ele[i].onclick = (evt) => {
      op.innerHTML = "";
      // console.log(evt.target.parentElement.children[0].textContent);
      let text = evt.target.parentElement.children[0].textContent;
      op.insertAdjacentHTML("afterbegin", `${text}の売り上げです`);
    };
  }
};
