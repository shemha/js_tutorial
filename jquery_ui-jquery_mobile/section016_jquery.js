// $(() => {
//   $("h1, h2, h3").hover(
//     function () {
//       //マウスカーソルが重なった時の処理
//       $(this).css("background-color", "orange");
//     },
//     function () {
//       //マウスカーソルが離れた時の処理
//       $(this).css("background-color", "white");
//     }
//   );
// });

// 他の記述方法
// $(() => {
//   $("h1, h2, h3").on({
//     mouseenter: function () {
//       $(this).css("background-color", "orange");
//     },
//     mouseleave: function () {
//       $(this).css("background-color", "white");
//     },
//   });
// });

// for文
// window.onload = () => {
//   const ele = document.getElementsByClassName("evt");
//   for (let i = 0; i < ele.length; i++) {
//     ele[i].addEventListener("mouseenter", function () {
//       this.style.backgroundColor = "orange";
//     });
//     ele[i].addEventListener("mouseleave", function () {
//       this.style.backgroundColor = "white";
//     });
//   }
// };

// NodeListのforEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("evt");
//   ele.forEach((e) => {
//     e.onmouseenter = (evt1) => (evt1.target.style.backgroundColor = "orange");
//     e.onmouseleave = (evt2) => (evt2.target.style.backgroundColor = "white");
//   });
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.getElementsByClassName("evt");
//   [...ele].forEach(function (e) {
//     e.addEventListener("mouseenter", function () {
//       this.style.backgroundColor = "orange";
//     });
//     e.addEventListener("mouseleave", function () {
//       this.style.backgroundColor = "white";
//     });
//   });
// };

// Array.formメソッド
// window.onload = () => {
//   const ele = document.getElementsByClassName("evt");
//   Array.from(ele, function (e) {
//     e.addEventListener("mouseenter", function () {
//       this.style.backgroundColor = "orange";
//     });
//     e.addEventListener("mouseleave", function () {
//       this.style.backgroundColor = "white";
//     });
//   });
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.getElementsByClassName("evt");
//   const result = [...gain].map(function (e) {
//     e.onmouseenter = function () {
//       this.style.backgroundColor = "orange";
//     };
//     e.onmouseleave = function () {
//       this.style.backgroundColor = "white";
//     };
//   });
// };

// mapメソッド(アロー関数式)
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"HTMLCollection"
  console.log(
    Object.prototype.toString.call(document.getElementsByClassName("evt"))
  );
  console.log(document.getElementsByClassName("evt").constructor.name);
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(5)/h1.evt/h2.evt/h3.evt/h3.evt/h3.evt"
  console.dir(document.getElementsByClassName("evt"));
  const gain = document.getElementsByClassName("evt");
  const result = [...gain].map((e) => {
    e.onmouseenter = (evt1) => (evt1.target.style.backgroundColor = "orange");
    e.onmouseleave = (evt2) => (evt2.target.style.backgroundColor = "white");
  });
};
