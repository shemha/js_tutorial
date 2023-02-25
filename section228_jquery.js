$(function(){
    $(":button:eq(0)").click(function(){
        var textData = $("#myContent").val();
        try {
            var jsonData = $.parseJSON(textData);
        }catch(e){
            var jsonData = null;
        }
        if(jsonData === null){
            jsonData = "JSONデータが正しくありません";
        }else{
            jsonData = $.param(jsonData);
        }
        $("output:first").text(jsonData);
    });
});