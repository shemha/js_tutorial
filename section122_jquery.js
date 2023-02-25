$(function(){
    $("#btn1").click(function(){
        var y = $("#memo").scrollTop();
        alert("縦のスクロール量：" + y);
    });
    $("#btn2").click(function(){
        $("#memo").scrollTop(20);
    });
});