$(function(){
    var flg1 = "off";
    var flg2 = "off";
    $("#btn1").click(function(){
        if(flg1 == "off"){
            $("#photo1").hide("fast");
            flg1 = "on";
        }else{
            $("#photo1").show("slow");
            flg1 = "off"
        }
    });
    $("#btn2").click(function(){
        if(flg2 == "off"){
            $("#photo2").hide(0, function(){
                $("output:first").text("");
            });
            flg2 = "on";
        }else{
            $("#photo2").show(1000, function(){
                $("output:first").text("表示完了");
            });
            flg2 = "off";
        }
    });
});
