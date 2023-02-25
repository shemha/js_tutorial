// $(() => {
//   // ボタンにクリックイベントを割り当て
//   $(":button:eq(0)").click(() => {
//     // 表内のtd要素内の文字を取得し配列で返す
//     const price = $("table td").map((_, ele) => {
//       // 要素を読み出し数値型にする
//       const p = parseInt($(ele).text());
//       if (p >= 0) {
//         // 読み出した内容を返す
//         return p;
//       } else {
//         // マイナス値の場合は配列に含めないようにnullを返す
//         return null;
//       }
//     });
//     // 合計を入れる変数を0にする
//     let total = 0;
//     // 配列の数だけ繰り返す
//     price.each((_, val) => (total = total + val));
//     // 合計を表示する
//     alert("合計：" + total);
//   });
// });

// JavaScriptで記述する場合・・・
window.onload = () => {
  btn.onclick = () => {
    // const gain = document.querySelectorAll("table td");
    const gain = document.getElementsByTagName("td");

    const result = [...gain]
      .filter((e) => Number(e.textContent) >= 0)
      .map((e) => Number(e.textContent))
      .reduce((sum, e) => sum + e, 0);

    alert("合計：" + result);
  };
};
