// $(function () {
//   $("img").click(function () {
//     alert("クリックされました");
//   });
//   $(":button:eq(0)").click(function () {
//     var cloneElement01 = $("#imageList img:first").clone();
//     $(cloneElement01).appendTo("#imageList");
//   });
//   $(":button:eq(1)").click(function () {
//     var cloneElement02 = $("#imageList img:first").clone(true);
//     $(cloneElement02).appendTo("#imageList");
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  let img = document.images[0];
  let btn = document.forms[0];
  img.onclick = () => {
    alert("クリックされました");
  };
  btn[0].onclick = () => {
    let newImg1 = img.cloneNode(false);
    imageList.appendChild(newImg1);
  };
  btn[1].onclick = () => {
    let newImg2 = img.cloneNode(true);
    imageList.appendChild(newImg2);
    imageList.lastElementChild.onclick = () => {
      alert("クリックされました");
    };
  };
};
