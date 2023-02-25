$(function(){
    $(":button").click(function(){
        var ary1 = ["(株)", "C", "and"];
        var ary2 = ["R", "研究所"];
        var ary = $.merge(ary1, ary2);
        $("output:first").html("要素数：" + ary.length + "<br>内　容：" + ary.join());
    });
});