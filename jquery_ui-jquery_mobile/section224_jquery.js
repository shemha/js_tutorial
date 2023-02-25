$(function(){
    $(":button:eq(0)").click(function(){
        var fieldData = $("#myContent").val();
        $("h1:first").data("myData", fieldData);
        $("output:first").text("保存しました");
    });
    $(":button:eq(1)").click(function(){
        var readData = $("h1:first").data("myData");
        $("output:first").html("以下のデータを読み込みました<br>" + readData);
    });
});
