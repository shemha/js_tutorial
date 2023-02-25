// $(() => {
//   $(":button").click(() => {
//     // noteのID名を持つ要素の背景色をオレンジ色にする
//     $("#note").css("background", "orange");
//   });
// });

// JavaScriptの場合・・・
// id属性を取得した方がより高速
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]")
    )
  );
  console.log(document.querySelectorAll("input[type=button]").constructor.name);
  // オブジェクトの階層の確認 ※結果は"NodeList(1)/input#btn"
  console.dir(document.querySelectorAll("input[type=button]"));
  // オブジェクトの種類の確認 ※結果は"NodeList"/"HTMLInputElement"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]"[0])
    )
  );
  console.log(
    document.querySelectorAll("input[type=button]")[0].constructor.name
  );
  // オブジェクトの階層の確認 ※結果は"NodeList(0)"
  console.dir(document.querySelectorAll("input[type=button]")[0]);
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(
    Object.prototype.toString.call(
      document.querySelectorAll("input[type=button]").item(0)
    )
  );
  console.log(
    document.querySelectorAll("input[type=button]").item(0).constructor.name
  );
  // オブジェクトの階層の確認 ※結果は"HTMLInputElement"
  console.dir(document.querySelectorAll("input[type=button]").item(0));
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn));
  console.log(btn.constructor.name);
  // オブジェクトの階層の確認 ※結果は"input#btn"
  console.dir(btn);
  btn.onclick = () => {
    // オブジェクトの種類を確認 ※結果"HTMLDivElement"
    console.log(Object.prototype.toString.call(note));
    console.log(note.constructor.name);
    // オブジェクトの階層の確認 ※結果は"div#note"
    console.dir(note);
    // オブジェクトの種類を確認 ※結果"CSSStyleDeclaration"
    console.log(Object.prototype.toString.call(note.style));
    console.log(note.style.constructor.name);
    // オブジェクトの階層の確認 ※結果は"CSSStyleDeclaration"
    console.dir(note.style);
    // オブジェクトの種類を確認 ※結果"String"
    console.log(Object.prototype.toString.call(note.style.backgroundColor));
    console.log(note.style.backgroundColor.constructor.name);
    // オブジェクトの階層の確認 ※存在なし
    console.dir(note.style.backgroundColor);
    note.style.backgroundColor = "orange";
  };
};

// type属性を取得する場合
// window.onload = () => {
//   document.querySelectorAll("input[type=button]")[0].onclick = () => {
//     note.style.backgroundColor = "orange";
//   };
// };
