$(function(){
    setInterval(function(){
        var time = $.now();
        var dateObj = new Date(time);
        var h = dateObj.getHours();
        var m = dateObj.getMinutes();
        var s = dateObj.getSeconds();
        $("output:first").text(h + "時" + m + "分" + s + "秒");
    }, 1000);
});
