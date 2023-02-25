// $(function () {
//   function message(evt) {
//     var cameraName = evt.data.camera;
//     var ymd = evt.data.year;
//     $("output:first").html("カメラ: " + cameraName + "<br>撮影年: " + ymd);
//   }
//   $("#gallery img:eq(0)").mouseover(
//     { camera: "Nikon DIX", year: 2004 },
//     message
//   );
//   $("#gallery img:eq(1)").mouseover(
//     { camera: "EDS 5D mark II", year: 2010 },
//     message
//   );
//   $("#gallery img:eq(2)").mouseover({ camera: "TM700", year: 2011 }, message);
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let imgs = document.images;
  let op = document.getElementsByTagName("output")[0];

  function message(evt) {
    let cameraName = evt.camera;
    let ymd = evt.year;
    op.innerHTML = "カメラ: " + cameraName + "<br>撮影年: " + ymd;
  }

  imgs[0].onmouseover = () => message({ camera: "Nikon DIX", year: 2004 });
  imgs[1].onmouseover = () => message({ camera: "EDS 5D mark II", year: 2010 });
  imgs[2].onmouseover = () => message({ camera: "TM700", year: 2011 });
};
