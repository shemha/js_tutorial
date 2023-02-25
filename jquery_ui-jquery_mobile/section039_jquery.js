// $(() => {
//   // 最初のボタンにclickイベントを割り当てる
//   $("#changeCSS").click(function () {
//     // Nexusで始まるテキストフィールドを抽出
//     $("input[value^='Nexus']").each(function () {
//       // テキストフィールドだけを対象にする
//       const color = $(this).attr("type") == "text" ? "orange" : null;
//       // 背景色をオレンジ色にする
//       $(this).css("background", color);
//     });
//   });
//   // 2番目のボタンにclickイベントを割り当てる
//   $("#setAttr").click(function () {
//     // attrを使ってID名kindleの値をNexusにする
//     $("#kindle").attr("value", "Nexus");
//   });
//   // 3番目のボタンにclickイベントを割り当てる
//   $("#setProp").click(function () {
//     // propを使ってID名kindleの値をNexusにする
//     $("#kindle").prop("value", "Nexus");
//   });
// });

// JavaScriptで記述する場合
// for文;
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type='button']");
//   btnType[0].onclick = () => {
//     const ele = document.querySelectorAll("input[value^='Nexus']");
//     for (let i = 0; i < ele.length; i++) {
//       if (ele[i].type === "text") {
//         ele[i].style.background = "orange";
//       }
//     }
//   };
//   btnType[1].onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus";
//   };
//   btnType[2].onclick = () => {
//     kindle.value = "Nexus";
//   };
// };

// forEachメソッド
// window.onload = () => {
//   changeCSS.onclick = () => {
//     const ele = document.querySelectorAll("input[value^='Nexus']");
//     ele.forEach((e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.background = color;
//     });
//   };
//   setAttr.onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus";
//   };
//   setProp.onclick = () => {
//     kindle.value = "Nexus";
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   changeCSS.onclick = () => {
//     Array.from(document.querySelectorAll("input[value^='Nexus']"), (e) => {
//       const color = e.type === "text" ? "orange" : null;
//       e.style.background = color;
//     });
//   };
//   setAttr.onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus";
//   };
//   setProp.onclick = () => {
//     kindle.value = "Nexus";
//   };
// };

// mapメソッド
// window.onload = () => {
//   changeCSS.onclick = () => {
//     const gain = document.querySelectorAll("input[value^='Nexus']"),
//       result = [...gain].map((e) => {
//         const color = e.type === "text" ? "orange" : null;
//         e.style.background = color;
//       });
//   };
//   setAttr.onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus";
//   };
//   setProp.onclick = () => {
//     kindle.value = "Nexus";
//   };
// };

// Array.fromとfilterメソッド
// window.onload = () => {
//   changeCSS.onclick = () => {
//     const gain = document.querySelectorAll("input[value^='Nexus']"),
//       result = Array.from(
//         [...gain].filter((e) => e.type === "text"),
//         (e) => (e.style.background = "orange")
//       );
//   };
//   setAttr.onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus";
//   };
//   setProp.onclick = () => {
//     kindle.value = "Nexus";
//   };
// };

// filterメソッド
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(changeCSS));
  // オブジェクトの階層の確認 ※結果は"input#changeCSS"
  console.dir(changeCSS);
  changeCSS.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"NodeList"
    console.log(
      Object.prototype.toString.call(
        document.querySelectorAll("input[value^='Nexus']")
      )
    );
    // オブジェクトの階層の確認 ※結果は"NodeList(2)/input"→"NodeList(3)/input/input/input#kindle"
    console.dir(document.querySelectorAll("input[value^='Nexus']"));
    const gain = document.querySelectorAll("input[value^='Nexus']");
    const result = [...gain].filter(
      (e) => (e.style.background = e.type === "text" && "orange")
    );
  };
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(setAttr));
  // オブジェクトの階層の確認 ※結果は"input#setAttr"
  console.dir(setAttr);
  setAttr.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
    console.log(Object.prototype.toString.call(kindle));
    // オブジェクトの階層の確認 ※結果は"input#kindle"
    console.dir(kindle);
    // オブジェクトの種類の確認 ※結果は"NamedNodeMap"
    console.log(Object.prototype.toString.call(kindle.attributes));
    // オブジェクトの階層の確認 ※結果は"NamedNodeMap"
    console.dir(kindle.attributes);
    // オブジェクトの種類の確認 ※結果は"Attr"
    console.log(Object.prototype.toString.call(kindle.attributes["value"]));
    // オブジェクトの階層の確認 ※結果は"value"
    console.dir(kindle.attributes["value"]);
    // オブジェクトの種類の確認 ※結果は"String"
    console.log(
      Object.prototype.toString.call(kindle.attributes["value"].nodeValue)
    );
    // オブジェクトの階層の確認 ※結果は"Kindle"
    console.dir(kindle.attributes["value"].nodeValue);
    kindle.attributes["value"].nodeValue = "Nexus";
    // オブジェクトの種類の確認 ※結果は"String"
    console.log(
      Object.prototype.toString.call(kindle.attributes["value"].nodeValue)
    );
    // オブジェクトの階層の確認 ※結果は"Nexus"
    console.dir(kindle.attributes["value"].nodeValue);
  };
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(setProp));
  // オブジェクトの階層の確認 ※結果は"input#setProp"
  console.dir(setProp);
  setProp.onclick = () => {
    // オブジェクトの種類の確認 ※結果は"String"
    console.log(Object.prototype.toString.call(kindle.value));
    // オブジェクトの階層の確認 ※結果は"Kindle"→"Nexus"
    console.dir(kindle.value);
    kindle.value = "Nexus";
  };
};

// メソッドチェーン
// window.onload = () => {
//   changeCSS.onclick = () => {
//     const gain = document.querySelectorAll("input[value^='Nexus']");
//     const result = [...gain]
//       .filter((e) => e.type === "text")
//       .map((e) => (e.style.background = "orange"));
//   };
//   setAttr.onclick = () => {
//     kindle.attributes["value"].nodeValue = "Nexus"};
//   setProp.onclick = () => {
//     kindle.value = "Nexus";
//   };
// };
