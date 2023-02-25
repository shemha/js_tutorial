$(function(){
    $(":button").click(function(){
        var base = document.getElementById("price");
        var li = base.getElementsByTagName("li");
        var priceData = $.makeArray(li);
        for(var i=0, text=""; i<priceData.length; i++){
            text = text + $(priceData[i]).text() + "円<br>";
        }
        $("output:first").html(text);
    });
});
