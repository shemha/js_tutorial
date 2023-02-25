// $(() => {
//   $(":button:eq(0)").click(() => {
//     $("img").each(function () {
//       $(this).animate(
//         {
//           height: "240px",
//           borderWidth: "10px",
//         },
//         8000
//       );
//     });
//   });
//   $(":button:eq(1)").click(() => {
//     $("img:animated").css("opacity", 0.25);
//   });
// });

// JavaScriptで記述する場合
// for文
// window.onload = () => {
//   const btnType = document.querySelectorAll("input[type=button]"),
//     ele = document.querySelectorAll("img");
//   btnType[0].onclick = () => {
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].animate(
//         {
//           height: "240px",
//           borderWidth: "10px",
//         },
//         {
//           delay: 0,
//           duration: 8000,
//           easing: "linear",
//           fill: "forwards",
//           iterations: 1,
//         }
//       );
//     }
//   };
//   btnType[1].onclick = () => {
//     for (let i = 0; i < ele.length; i++) {
//       ele[i].style.opacity = 0.25;
//     }
//   };
// };

// forEachメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("img");
//   started.onclick = () => {
//     ele.forEach((e) => {
//       e.animate(
//         {
//           height: "240px",
//           borderWidth: "10px",
//         },
//         {
//           delay: 0,
//           duration: 8000,
//           easing: "linear",
//           fill: "forwards",
//           iterations: 1,
//         }
//       );
//     });
//   };
//   changed.onclick = () => {
//     ele.forEach((e) => (e.style.opacity = 0.25));
//   };
// };

// Array.fromメソッド
// window.onload = () => {
//   const ele = document.querySelectorAll("img");
//   started.onclick = () => {
//     Array.from(ele, (e) =>
//       e.animate(
//         {
//           height: "240px",
//           borderWidth: "10px",
//         },
//         {
//           delay: 0,
//           duration: 8000,
//           easing: "linear",
//           fill: "forwards",
//           iterations: 1,
//         }
//       )
//     );
//   };
//   changed.onclick = () => {
//     Array.from(ele, (e) => (e.style.opacity = 0.25));
//   };
// };

// mapメソッド
// window.onload = () => {
//   const gain = document.querySelectorAll("img");
//   started.onclick = () => {
//     const result1 = [...gain].map((e) =>
//       e.animate(
//         {
//           height: "240px",
//           borderWidth: "10px",
//         },
//         {
//           delay: 0,
//           duration: 8000,
//           easing: "linear",
//           fill: "forwards",
//           iterations: 1,
//         }
//       )
//     );
//   };
//   changed.onclick = () => {
//     const result2 = [...gain].map((e) => (e.style.opacity = 0.25));
//   };
// };

// imagesプロパティで取得
window.onload = () => {
  // オブジェクトの種類の確認 ※結果は"NodeList"
  console.log(Object.prototype.toString.call(document.querySelectorAll("img")));
  // オブジェクトの階層の確認 ※結果は"NodeList(3)/img"
  console.dir(document.querySelectorAll("img"));
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(document.images));
  // オブジェクトの階層の確認 ※結果は"HTMLCollection(3)/img"
  console.dir(document.images);
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(started));
  // オブジェクトの階層の確認 ※結果は"input#started"
  console.dir(started);
  const gain = document.images;
  started.onclick = () => {
    const result1 = [...gain].map((e) => {
      // オブジェクトの種類の確認 ※結果は"Function"
      console.log(Object.prototype.toString.call(e.animate));
      // オブジェクトの階層の確認 ※結果は"animate()"
      console.dir(e.animate);
      e.animate(
        {
          height: "240px",
          borderWidth: "10px",
        },
        {
          delay: 0,
          duration: 8000,
          easing: "linear",
          fill: "forwards",
          iterations: 1,
        }
      );
    });
  };
  // オブジェクトの種類の確認 ※結果は"HTMLInputElement"
  console.log(Object.prototype.toString.call(changed));
  // オブジェクトの階層の確認 ※結果は"input#changed"
  console.dir(changed);
  changed.onclick = () => {
    const result2 = [...gain].map((e) => (e.style.opacity = 0.25));
  };
};
