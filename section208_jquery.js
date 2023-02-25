$(function(){
    $("#check").click(function(){
        var flag = $.support.opacity;
        $("output:first").text("opacity : " + flag);
    });
});