$(function(){
    var flg1 = "off";
    var flg2 = "off";
    $("#btn1").click(function(){
        if(flg1 == "off"){
            $("#photo1").slideUp("slow");
            flg1 = "on";
        }else{
            $("#photo1").slideDown("2000");
            flg1 = "off";
        }
    });
    $("#btn2").click(function(){
        if(flg2 == "off"){
            $("#photo2").slideUp(2000, function(){
                $("output:first").text("スライドアップ完了");
            });
            flg2 = "on";
        }else{
            $("#photo2").slideDown(2000, function(){
                $("output:first").text("スライドダウン完了");
            });
            flg2 = "off";
        }
    });
});
