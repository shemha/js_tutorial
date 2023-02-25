// $(() => {
//   $(":button:eq(0)").click(() => {
//     var url = $("#myPhoto").attr("src");
//     alert(url);
//   });
//   $(":button:eq(1)").click(() => {
//     $("#myPhoto").prop("src", "060/1.jpg");
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
  // オブジェクトの種類の確認 ※結果は"String"
  console.log(Object.prototype.toString.call(myPhoto.src));
  // オブジェクトの階層の確認 ※結果は"http://127.0.0.1:5501/060/0.jpg"→"http://127.0.0.1:5501/060/1.jpg"
  console.dir(myPhoto.src);
  const btnType = document.querySelectorAll("input[type=button]");
  btnType[0].onclick = () => alert(myPhoto.src);
  btnType[1].onclick = () => (myPhoto.src = "060/1.jpg");
};
