$.extend({
    inc : function(n){ return n + 1; }
});
$(function(){
    $(":button:eq(0)").click(function(){
        var num = parseFloat($("#myContent").val());
        var result = $.inc(num);
        $("output:first").text("加算結果：" + result);
    });
});
