$(function(){
    $.ajaxSetup({
        async : true,
        complete : function(){
            alert("読み込み完了");
        }
    });
    $.ajax("data.txt", {
        success : function(data, status, jqXHR){
            $("output:first").text("読み込んだデータ：" + data);
        }
    });
});
