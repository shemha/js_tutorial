$(function(){
    var a = new Number(5963);
    var flag1 = $.isNumeric(a);
    var b = 3.14e2;
    var flag2 = $.isNumeric(b);
    var c = new Number();
    var flag3 = $.isNumeric(c);
    var d = new Function();
    var flag4 = $.isNumeric(d);
    var e = Infinity;
    var flag5 = $.isNumeric(e);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2 + "<br>c:" + flag3 + "<br>d:" + flag4 + "<br>e:" + flag5);
});