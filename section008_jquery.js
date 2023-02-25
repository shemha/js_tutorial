// $(() => {
//   //   $("*").css("border", "1px dotted red");
//   // $("body *").css("border", "1px dotted red");
//   $("tbody *").css("border", "1px dotted red");
//   // $("tbody tr:eq(1) *").css("border", "1px dotted red");
// });

// JavaScriptで記述した場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(document.getElementsByTagName("tbody"))
  );
  console.log(document.getElementsByTagName("tbody").constructor.name);
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/tbody"
  console.dir(document.getElementsByTagName("tbody"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(document.querySelectorAll("tbody"))
  );
  console.log(document.querySelectorAll("tbody").constructor.name);
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/tbody"
  console.dir(document.querySelectorAll("tbody"));
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(Object.prototype.toString.call(sale.lastElementChild.children));
  console.log(sale.lastElementChild.children.constructor.name);
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(12)/tbody"
  console.dir(sale.lastElementChild.children);
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(sale.getElementsByTagName("tbody"))
  );
  console.log(sale.getElementsByTagName("tbody").constructor.name);
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/tbody"
  console.dir(sale.getElementsByTagName("tbody"));
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(Object.prototype.toString.call(sale.querySelectorAll("tbody")));
  console.log(sale.querySelectorAll("tbody").constructor.name);
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/tbody"
  console.dir(sale.querySelectorAll("tbody"));
  // オブジェクトの種類の確認 ※結果は"HTMLTableSectionElement"
  console.log(
    Object.prototype.toString.call(sale.getElementsByTagName("tbody").item(0))
  );
  console.log(sale.getElementsByTagName("tbody").item(0).constructor.name);
  // オブジェクトの階層の確認 ※結果は"tbody"
  console.dir(sale.getElementsByTagName("tbody").item(0));
  // オブジェクトの種類の確認 ※結果は"HTMLTableSectionElement"
  console.log(
    Object.prototype.toString.call(sale.querySelectorAll("tbody").item(0))
  );
  console.log(sale.querySelectorAll("tbody").item(0).constructor.name);
  // オブジェクトの階層の確認 ※結果は"tbody"
  console.dir(sale.querySelectorAll("tbody").item(0));
  const tbTag = document.getElementsByTagName("tbody").item(0);
  // オブジェクトの種類の確認 ※結果は"CSSStyleDeclaration"
  console.log(Object.prototype.toString.call(tbTag.style));
  console.log(tbTag.style.constructor.name);
  // オブジェクトの階層の確認 ※結果は"CSSStyleDeclaration"
  console.dir(tbTag.style);
  // tbTag.style.border = "1px dotted red";
  tbTag.style.setProperty("border", "1px dotted red");
};

// for文
// window.onload = () => {
//   const all = document.querySelectorAll("tbody *");
//   for (var i = 0; all.length; i++) {
//     all[i].style.border = "1px dotted red";
//   }
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   const all = document.querySelectorAll("tbody *");
//   all.forEach((e) => (e.style.border = "1px dotted red"));
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from(
//     document.querySelectorAll("tbody *"),
//     (e) => (e.style.border = "1px dotted red")
//   );
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("tbody *");
//   const result = [...gain].map((e) => (e.style.border = "1px dotted red"));
// };
