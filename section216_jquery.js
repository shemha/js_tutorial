$(function(){
    var a = new Array();
    var flag1 = $.isArray(a);
    var b = new Object();
    var flag2 = $.isArray(b);
    var c = new Number();
    var flag3 = $.isArray(c);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2 + "<br>c:" + flag3);
});