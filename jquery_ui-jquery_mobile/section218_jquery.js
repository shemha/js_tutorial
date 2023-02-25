$(function(){
    $(":button").click(function(){
        var flag1 = $.contains($("#myList1").get(0), $("#melon").get(0));
        var flag2 = $.contains($("#myList2").get(0), $("#melon").get(0));
        $("output:first").html(flag1 + "<br>" + flag2);
    });
});
