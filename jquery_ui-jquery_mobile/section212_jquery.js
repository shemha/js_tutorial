$(function(){
    var a = window;
    var flag1 = $.isWindow(a);
    var b = new Object();
    var flag2 = $.isWindow(b);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2);
});
