$(function(){
    $("#del").click(function(){
        var ele1 = $("#myList li:eq(0)").get(0);
        var ele2 = $("#myList li:eq(2)").get(0);
        var ele3 = $("#myList li:eq(2)").get(0);
        var ele4 = $("#myList li:eq(0)").get(0);
        var ele5 = $("#myList li:eq(0)").get(0);
        var any = [ ele1, ele2, ele3, ele4, ele5 ];
        var result = $.unique(any);
        $(result).each(function(index, n){
            var str = $("output:first").html();
            str = str + (1 + index) + " : " + $(this).text() + "<br>";
            $("output:first").html(str);
        });
    });
});