$(function(){
    $("#startAnime").click(function(){
        $("#photo1").animate({ width : 40 }, 1000)
            .queue(function(){
                $(this).css("border", "8px solid red");
                $(this).dequeue();
            })
            .delay(1000)
            .queue(function(){
                $(this).css("border", "8px solid blue");
                $(this).dequeue();
            })
    });
});
