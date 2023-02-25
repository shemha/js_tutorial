// $(()=> {
//   $(":button").click(()=> {
//     const id = this.id;
//     alert("クリックされたボタンID:" + id);
//   });
// });

// JavaScriptで記述する場合・・・
// for文(type属性を使用)
// window.onload = function () {
//   const ele = document.querySelectorAll("input[type='button'], button");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].onclick = function () {
//       const id = this.id;
//       alert("クリックされたボタンID:" + id);
//     };
//   }
// };

// for文(id属性を使用)
// window.onload = () => {
//   const ele = [btn1, btn2];
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].onclick = () => {
//       alert(`クリックされたボタンID: + ${this.id}`);
//     };
//   }
// };

// forEachメソッド
// window.onload = () => {
//   const ele = [btn1, btn2];
//   ele.forEach((e) => {
//     e.onclick = () => {
//       alert(`クリックされたボタンID: + ${this.id}`);
//     };
//   });
// };

// Array.fromメソッド
// window.onload = () => {
//   Array.from([btn1, btn2], (e) => {
//     e.onclick = () => {
//       alert(`クリックされたボタンID: + ${e.id}`);
//     };
//   });
// };

// mapメソッド
window.onload = function () {
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(btn1));
  // オブジェクトの階層の確認 ※結果は"input#btn1"
  console.dir(btn1);
  // オブジェクトの種類の確認 ※結果は"HTMLButtonElement"
  console.log(Object.prototype.toString.call(btn2));
  // オブジェクトの階層の確認 ※結果は"button#btn2"
  console.dir(btn2);
  const gain = [btn1, btn2],
    result = gain.map((e) => {
      e.onclick = () => {
        alert(`クリックされたボタンID: + ${e.id}`);
      };
    });
};
