$.holdReady(true);
$("output:first").html("処理1を実行<br>");
$(":button:first").click(function(){
    $.holdReady(false);
});
$(function(){
    var htmlData = $("output:first").html();
    $("output:first").html(htmlData + "処理2を実行<br>");
});
