$(function(){
    $("#btn1").click(function(){
        $("#photo1").slideToggle("slow");
    });
    $("#btn2").click(function(){
        $("#photo1").slideToggle("fast", function(){
            $("output:first").text("スライドダウン完了");
        });
    });
});
