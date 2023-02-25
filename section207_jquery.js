// 効果ない・・・
$(function(){
    var resultStr = "";
    resultStr = "<div>WebKit:" + $.browser.webkit + "</div>";
    resultStr += "<div>FireFox:" + $.browser.mozilla + "</div>";
    resultStr += "<div>InternetExplorer:" + $.browser.msie + "</div>";
    resultStr += "<div>Opera:" + $.browser.opera + "</div>";
    $("output:first").html(resultStr);
});