$(function(){
    $.ajaxPreFilter(function(options, originalOptions, jqXHR){
        if(options.success){
            alert("読み込み成功");
        }
    });
    $.ajax("data.txt", {
        async : true,
        success : function(data, status, jqXHR){
            $("output:first").text("読み込んだデータ：" + data);
        }
    });
});