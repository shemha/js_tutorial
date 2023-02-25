// $(() => {
//   setInterval(() => {
//     $("output:first").test($(":focus").val());
//   }, 200);
// });

// JavaScriptで記述する場合・・・
// window.onload = () => {
//   setInterval(() => {
//     const ele = document.querySelector(":focus");
//     if (ele) {
//       document.getElementsByTagName("output")[0].innerHTML = ele.value;
//     }
//   }, 200);
// };

// 三項演算子
window.onload = () => {
  setInterval(() => {
    const ele = document.querySelector(":focus");
    document.getElementsByTagName("output")[0].innerHTML = ele
      ? ele.value
      : null;
  }, 200);
};
