$(function(){
    $("#startAnime").click(function(){
        $("#photo1").animate({ width : 40 }, 1000)
                    .animate({ height : 40 }, 1000)
                    .animate({ opacity : 0.01 }, 1000)
                    .animate({ opacity : 1.0 }, 1000)
                    .animate({ height : 120 }, 1000)
                    .animate({ width : 160 }, 1000)
    });
    $("#clearQ").click(function(){
        $("#photo1").clearQueue();
    });
});