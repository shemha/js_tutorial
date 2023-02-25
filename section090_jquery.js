// $(function () {
//   $("#sale")
//     // th要素にアクセスし、その前の要素#saleに戻す
//     .find("th")
//     .css("color", "red")
//     .end()
//     // td要素にアクセスし、その前の要素#saleに戻す
//     .find("td")
//     .css("background-color", "yellow")
//     .end()
//     // tr要素にアクセスし、その前の要素#saleに戻す
//     .find("tr")
//     .eq(2)
//     .css("color", "red");
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let thTags = sale.getElementsByTagName("th");
  [...thTags].map((e) => (e.style.color = "red"));
  let tdTags = sale.getElementsByTagName("td");
  [...tdTags].map((e) => (e.style.backgroundColor = "yellow"));
  let trTags = sale.rows;
  trTags[2].style.color = "red";
};
