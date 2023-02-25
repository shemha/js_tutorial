$(function(){
    var a = { };
    var flag1 = $.isPlainObject(a);
    var b = new Object();
    var flag2 = $.isPlainObject(b);
    var c = new Object(39);
    var flag3 = $.isPlainObject(c);
    var d = { e : 2.71, pi : 3.14 };
    var flag4 = $.isPlainObject(d);
    var e = "JavaScript";
    var flag5 = $.isPlainObject(e);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2 + "<br>c:" + flag3 + "<br>d:" + flag4 + "<br>e:" + flag5);
});
