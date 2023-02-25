$(function(){
    $(":button").click(function(){
        var data = [40, -61, 40, 90, 50, -91, 60, -31];
        var posi = $.map(data, function(value, index){
            if(value < 0){ return null; }
            return value;
        });
        $("output:first").text(posi.toString());
    });
});
