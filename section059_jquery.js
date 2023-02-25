// $(() => {
//   $(":button:eq(0)").click(() => {
//     const url = $("#myPhoto").attr("src");
//     alert(url);
//   });
//   $(":button:eq(1)").click(() => {
//     $("#myPhoto").attr("src", "059/1.jpg");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]")
    )
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(2)/input"
  console.dir(document.querySelectorAll("input[type=button]"));
  // オブジェクトの種類の確認 ※結果は"Attr"
  console.log(Object.prototype.toString.call(myPhoto.attributes.src));
  // オブジェクトの階層の確認 ※結果は"src"
  console.dir(myPhoto.attributes.src);
  // オブジェクトの種類の確認 ※結果は"String"
  console.log(Object.prototype.toString.call(myPhoto.attributes.src.value));
  // オブジェクトの階層の確認 ※結果は"059/0.jpg"→"059/1.jpg"
  console.dir(myPhoto.attributes.src.value);
  const btnType = document.querySelectorAll("input[type=button]");
  btnType[0].onclick = () => alert(myPhoto.attributes.src.value);
  btnType[1].onclick = () => (myPhoto.attributes.src.value = "059/1.jpg");
};
