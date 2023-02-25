$(function(){
    $.ajax("data.txt", {
        async : true,
        cache : false,
        success : function(data, status, jqXHR){
            $("output:first").text("読み込んだデータ：" + data);
        }
    });
});
