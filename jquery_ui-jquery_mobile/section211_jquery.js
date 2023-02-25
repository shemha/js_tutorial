$(function(){
    var a = { };
    var flag1 = $.isEmptyObject(a);
    var b = new Object(123);
    var flag2 = $.isEmptyObject(b);
    var c = { pi : 3.14, e : 2.71 };
    var flag3 = $.isEmptyObject(c);
    var d = [ ];
    var flag4 = $.isEmptyObject(d);
    var e = { };
    e.pi = 3.14;
    var flag5 = $.isEmptyObject(e);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2 + "<br>c:" + flag3 + "<br>d:" + flag4 + "<br>e:" + flag5);
});
