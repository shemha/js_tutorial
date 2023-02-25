// $(() => {
//   $(":button").click(function () {
//     $("output:first").text("");
//     $(":checked").each(function () {
//       const itemName = $(this).attr("name");
//       $("output:first").append(itemName).append("<br>");
//     });
//   });
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']")[0];
//   btnType.onclick = () => {
//     let text = "";
//     const ele = document.querySelectorAll("input[type='checkbox']:checked");
//     for (let i = 0; i < ele.length; i++) {
//       text = text + ele[i].name + "<br>";
//     }
//     document.getElementsByTagName("output")[0].innerHTML = text;
//   };
// };

// forEachメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     let text = "";
//     const ele = document.querySelectorAll("input[type='checkbox']:checked");
//     ele.forEach((e) => {
//       text = text + e.name + "<br>";
//     });
//     document.getElementsByTagName("output")[0].innerHTML = text;
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   btn.onclick = () => {
//     let text = "";
//     Array.from(
//       document.querySelectorAll("input[type='checkbox']:checked"),
//       (e) => (text = text + e.name + "<br>")
//     );
//     document.getElementsByTagName("output")[0].innerHTML = text;
//   };
// };

// mapメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(
        document.querySelectorAll("input[type='checkbox']:checked")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(2)/input"
    console.dir(document.querySelectorAll("input[type='checkbox']:checked"));
    let text = "";
    const gain = document.querySelectorAll("input[type='checkbox']:checked");
    const result = [...gain].map((e) => {
      text = text + e.name + "<br>";
    });
    document.getElementsByTagName("output")[0].innerHTML = text;
    // オブジェクトの種類の確認※結果は"HTMLCollection"
    console.log(
      Object.prototype.toString.call(document.getElementsByTagName("output"))
    );
    // オブジェクトの階層の確認 ※結果は"HTMLCollection(1)/output"
    console.dir(document.getElementsByTagName("output"));
  };
};
