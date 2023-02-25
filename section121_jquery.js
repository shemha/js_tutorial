$(function(){
    $("#btn").click(function(){
        var coords = $("h1").position();
        var x = coords.left;
        var y = coords.top;
        alert("X：" + x + "、Y：" + y);
    });
});