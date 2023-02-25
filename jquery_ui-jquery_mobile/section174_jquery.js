$(function(){
    var flg = "off";
    $("#btn1").click(function(){
        if(flg == "off"){
            $("#photo1").fadeOut("fast");
            flg = "on";
        }else{
            $("#photo1").fadeIn("slow");
            flg = "on";
        }
    });
    $("#btn2").click(function(){
        $("#photo1").fadeTo("slow", 0.5, function(){
            $("output:first").text("フェード完了");
        });
    });
});
