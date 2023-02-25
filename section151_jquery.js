// $(function () {
//   $(".thumb").mouseover(function () {
//     $(this).fadeTo(50, 0.5);
//     $("#result").html(
//       $("#result").html() + "div要素でmouseoverイベント発生<br>"
//     );
//   });
//   $(".thumb").mouseout(function () {
//     $(this).fadeTo(50, 1.0);
//     $("#result").html(
//       $("#result").html() + "div要素でmouseoutイベント発生<br>"
//     );
//   });
//   $("#photo1").mouseover(function () {
//     $(this).fadeTo(50, 0.5);
//     $("#result").html($("#result").html() + "画像でmouseoverイベント発生<br>");
//   });
//   $("#photo1").mouseout(function () {
//     $(this).fadeTo(50, 1.0);
//     $("#result").html($("#result").html() + "画像でmouseoutイベント発生<br>");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let thumb = document.getElementsByClassName("thumb")[0];
  let events = ["mouseover", "mouseout"];

  thumb.addEventListener(events[0], (evt) => {
    NS[events[0]](evt);
    result.innerHTML = result.innerHTML + "div要素でmouseoverイベント発生<br>";
  });

  thumb.addEventListener(events[1], (evt) => {
    NS[events[1]](evt);
    result.innerHTML = result.innerHTML + "div要素でmouseoutイベント発生<br>";
  });

  photo1.addEventListener(events[0], (evt) => {
    NS[events[0]](evt);
    result.innerHTML = result.innerHTML + "画像でmouseoverイベント発生<br>";
  });

  photo1.addEventListener(events[1], (evt) => {
    NS[events[1]](evt);
    result.innerHTML = result.innerHTML + "画像でmouseoutイベント発生<br>";
  });

  const NS = {
    mouseover: function (evt) {
      evt.target.animate(
        {
          opacity: ["0.5", "1.0"],
        },
        {
          fill: "forwards",
          duration: 500,
        }
      );
    },

    mouseout: function (evt) {
      evt.target.animate(
        {
          opacity: ["1.0", "0.5"],
        },
        {
          fill: "forwards",
          duration: 500,
        }
      );
    },
  };
};
