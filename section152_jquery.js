// $(function () {
//   $(".thumb").mouseenter(function () {
//     $(this).fadeTo(50, 0.5);
//     $("#result").html(
//       $("#result").html() + "div要素でmouseenterイベント発生<br>"
//     );
//   });
//   $(".thumb").mouseleave(function () {
//     $(this).fadeTo(50, 1.0);
//     $("#result").html(
//       $("#result").html() + "div要素でmouseleaveイベント発生<br>"
//     );
//   });
//   $("#photo1").mouseenter(function () {
//     $(this).fadeTo(50, 0.5);
//     $("#result").html($("#result").html() + "画像でmouseenterイベント発生<br>");
//   });
//   $("#photo1").mouseleave(function () {
//     $(this).fadeTo(50, 0.5);
//     $("#result").html(
//       $("#result").html() + "div要素でmouseleaveイベント発生<br>"
//     );
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let thumb = document.getElementsByClassName("thumb")[0];
  let events = ["mouseenter", "mouseleave"];

  thumb.addEventListener(events[0], (evt) => {
    NS[events[0]](evt);
    result.innerHTML = result.innerHTML + "div要素でmouseenterイベント発生<br>";
  });

  thumb.addEventListener(events[1], (evt) => {
    NS[events[1]](evt);
    result.innerHTML = result.innerHTML + "div要素でmouseleaveイベント発生<br>";
  });

  photo1.addEventListener(events[0], (evt) => {
    NS[events[0]](evt);
    result.innerHTML = result.innerHTML + "画像でmouseenterイベント発生<br>";
  });

  photo1.addEventListener(events[1], (evt) => {
    NS[events[1]](evt);
    result.innerHTML = result.innerHTML + "画像でmouseleaveイベント発生<br>";
  });

  const NS = {
    mouseenter: function (evt) {
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

    mouseleave: function (evt) {
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
