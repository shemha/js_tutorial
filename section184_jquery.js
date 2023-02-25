$(function(){
    $.get("data.txt", function(data, status, jqXHR){
        $("output:first").text("読み込んだデータ：" + data);
    });
});