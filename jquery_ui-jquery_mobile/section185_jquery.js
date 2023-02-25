$(function(){
    var url = "./data.json";
    $.getJSON(url, function(data){
        var year = data[0].year;
        var month = data[0].month;
        var name = data[0].name;
        $("output:first").text("読み込んだデータ：" + year + "年" + month + "月" + name);
    });
});
