// JavaScriptで記述する場合・・・（よくわからない）
window.onload = () => {
  (btn.onclick = () => {
    let style = document.defaultView.getComputedStyle(photo, null);
    let n = style.getPropertyValue("opacity");
    alert(n);
  }),
    true;
};
