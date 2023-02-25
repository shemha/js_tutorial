$(function(){
    $("#check").click(function(){
        var type1 = $.type("C&R研究所");
        var type2 = $.type(null);
        var type3 = $.type([1,2,3]);
        $("output:first").text(type1 + ", " + type2 + ", " + type3);
    });
});
