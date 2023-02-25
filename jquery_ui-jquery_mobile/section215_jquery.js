$(function(){
    var a = function(){ var i = 4649; }
    var flag1 = $.isFunction(a);
    var b = a;
    var flag2 = $.isFunction(b);
    var c = new Number();
    var flag3 = $.isFunction(c);
    var d = new Function();
    var flag4 = $.isFunction(d);
    $("output:first").html("a:" + flag1 + "<br>b:" + flag2 + "<br>c:" + flag3 + "<br>d:" + flag4);
});
