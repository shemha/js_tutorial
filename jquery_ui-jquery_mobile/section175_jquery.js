$(function(){
    $("#btn1").click(function(){
        $("#photo1").fadeToggle("slow");
    });
    $("#btn2").click(function(){
        $("#photo1").fadeToggle("fast", function(){
            $("output").text("フェード完了");
        });
    });
});
