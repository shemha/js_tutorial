$(function(){
    $(":button:eq(0)").click(function(){
        var fieldData = $("#myContent").val();
        $("h1:first").data({
            "uID" : 5963,
            "myData" : fieldData,
        });
        $("output:first").text("保存しました");
    });
    $(":button:eq(1)").click(function(){
        var readData = $("h1:first").data("uID");
        $("output:first").html("uIDのデータを読み出しました<br>" + readData);
    });
    $(":button:eq(2)").click(function(){
        var readData = $("h1:first").data("myData");
        $("output:first").html("myDataのデータを読み出しました<br>" + readData);
    });
    $(":button:eq(3)").click(function(){
        $("h1:first").removeData("myData");
        $("output:first").html("キー名myDataのデータを削除しました");
    });
    $(":button:eq(4)").click(function(){
        $("h1:first").removeData();
        $("output:first").html("全データを削除しました");
    });
});