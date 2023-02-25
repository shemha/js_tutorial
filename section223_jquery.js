$(function(){
    $(":button").click(function(){
        var data = [40, -61, 40, 90, 50, -91, 60, -31];
        var posi = $.grep(data, function(value, index){
            if(value < 0){ return false; }
            return true;
        }, false);
        $("output:first").text(posi.toString());
    });
});